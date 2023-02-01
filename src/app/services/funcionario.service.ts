import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Funcionario[]> {
    const url = `${this.baseUrl}/funcionarios`
    return this.http.get<Funcionario[]>(url)
  }

  findById(id: String): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionarios/${id}`
    return this.http.get<Funcionario>(url)
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionarios`
    return this.http.post<Funcionario>(url, funcionario);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/funcionarios/${id}`
    return this.http.delete<void>(url)
  }

  update(funcionario: Funcionario):Observable<void> {
    const url = `${this.baseUrl}/funcionarios/${funcionario.id}`
    return this.http.put<void>(url, funcionario)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
