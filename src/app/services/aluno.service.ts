import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    })
    const url = `${this.baseUrl}/alunos`
    return this.http.get<Aluno[]>(url, {headers: headers})
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

  pagarMensalidade(id: String, quantidadeMensalidadePagas: Number): Observable<Aluno> {
    const url = `${this.baseUrl}/alunos/pagarMensalidades/${id}?quantidadeMensalidadePagas=${quantidadeMensalidadePagas}`;
    return this.http.put<Aluno>(url, quantidadeMensalidadePagas);
  }

  getDadosDeMensalidade(id: String): Observable<Aluno> {
    const url = `${this.baseUrl}/alunos/pegarDadosMensalidades/${id}`;
    return this.http.get<Aluno>(url);
  }

  obterContagemAlunosPorMes(): Observable<number> {
    const url = `${this.baseUrl}/alunos/contagem`
    return this.http.get<number>(url)
  }

}
