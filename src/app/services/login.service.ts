import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: String = environment.baseUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginUsuario(objeto: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, objeto);
  }

  logado(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }


  deslogar() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getRole(): string {
    const token = sessionStorage.getItem('token');
    if (token) {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      return payloadObj.perfil;
    }
    return '';
  }


  validacaoToken(token: string): boolean {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Token inválido: formato incorreto.');
      }
      const encodedPayload = parts[1];
      const payload = JSON.parse(atob(encodedPayload));
      const tokenExpirationDate = new Date(payload.exp * 1000);
      const now = new Date();
      if (tokenExpirationDate < now) {
        throw new Error('Token expirado.');
      }
      return true;

    } catch {
      return false;
    }
  }

  buscarPerfil() {
    return this.httpClient.get<Perfil>(`${this.baseUrl}/usuarios/usuario-logado`);
  }


  getNome(): string {
    const token = sessionStorage.getItem('token');
    if (token) {
      const payload = token.split('.')[1];
      const decodedPayload = new TextDecoder('utf-8').decode(Uint8Array.from(atob(payload), c => c.charCodeAt(0)));
      const payloadObj = JSON.parse(decodedPayload);
      return payloadObj.nome;
    }
    return '';
  }

  alterarSenha(senhaAtual: string, novaSenha: string, confirmacaoNovaSenha: string) {
    const url = `${this.baseUrl}/usuarios/redefinir-senha-usuario-logado`
    const dto = { senhaAtual, novaSenha, confirmacaoNovaSenha }
    return this.httpClient.put(url, dto)
  }


  atualizarToken() {
    const refreshToken = sessionStorage.getItem('refreshToken')
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + refreshToken);

    this.httpClient.get<any>(`${this.baseUrl}/refresh-token`, { headers }).subscribe((response) => {
      const novoToken = response.token;
      sessionStorage.setItem('token', novoToken);
      window.location.reload();
    },
      (error) => {
        this.deslogar()
      }
    );
  }



}
