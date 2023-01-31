import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Antropometria } from '../models/antropometria';

@Injectable({
  providedIn: 'root'
})
export class AntropometriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Antropometria[]> {
    const url = `${this.baseUrl}/antropometrias`
    return this.http.get<Antropometria[]>(url)
  }

  findById(id: String): Observable<Antropometria> {
    const url = `${this.baseUrl}/antropometrias/${id}`
    return this.http.get<Antropometria>(url)
  }

  create(antropometria: Antropometria): Observable<Antropometria>{
    const url = `${this.baseUrl}/antropometrias`
    return this.http.post<Antropometria>(url, antropometria);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/antropometrias/${id}`
    return this.http.delete<void>(url)
  }

  update(antropometria: Antropometria):Observable<void> {
    const url = `${this.baseUrl}/antropometrias/${antropometria.id}`
    return this.http.put<void>(url, antropometria)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
