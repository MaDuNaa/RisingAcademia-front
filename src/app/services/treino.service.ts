import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Treino } from '../models/treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Treino[]> {
    const url = `${this.baseUrl}/treinos`
    return this.http.get<Treino[]>(url)
  }

  findById(id: String): Observable<Treino> {
    const url = `${this.baseUrl}/treinos/${id}`
    return this.http.get<Treino>(url)
  }

  create(treino: Treino): Observable<Treino>{
    const url = `${this.baseUrl}/treinos`
    return this.http.post<Treino>(url, treino);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/treinos/${id}`
    return this.http.delete<void>(url)
  }

  update(treino: Treino):Observable<void> {
    const url = `${this.baseUrl}/treinos/${treino.id}`
    return this.http.put<void>(url, treino)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
