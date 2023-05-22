import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Aluno[]> {
    const url = `${this.baseUrl}/alunos`
    return this.http.get<Aluno[]>(url)
  }

  findById(id: String): Observable<Aluno> {
    const url = `${this.baseUrl}/alunos/${id}`
    return this.http.get<Aluno>(url)
  }

  create(aluno: Aluno): Observable<Aluno>{
    const url = `${this.baseUrl}/alunos`
    return this.http.post<Aluno>(url, aluno);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/alunos/${id}`
    return this.http.delete<void>(url)
  }

  update(aluno: Aluno):Observable<void> {
    if (!aluno.id) {
      throw new Error('ID do aluno não definido');
    }
  
    const url = `${this.baseUrl}/alunos/${aluno.id}`
    return this.http.put<void>(url, aluno)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  atualizarMensalidades(): Observable<any> {
    const url = `${this.baseUrl}/atualizar-mensalidades`;
    return this.http.post(url, null);
  }

  pagarMensalidade(id: string, quantidadeMensalidade: string): Observable<Aluno> {
    const url = `${this.baseUrl}/pagar-mensalidade/${id}`;
    const body = { quantidadeMensalidade };
    return this.http.put<Aluno>(url, body);
  }

  getDadosDeMensalidade(): Observable<Aluno> {
    const url = `${this.baseUrl}/mensalidade/dados`;
    return this.http.get<Aluno>(url);
  }

}
