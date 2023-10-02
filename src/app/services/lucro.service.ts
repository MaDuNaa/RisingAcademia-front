import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LucroService {
    baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLucroPrevisto(): Observable<number> {
    const url = `${this.baseUrl}/lucro/previsto`
    return this.http.get<number>(url)
  }

  getLucroMensal(): Observable<number> {
    const url = `${this.baseUrl}/lucro/lucroMensal`
    return this.http.get<number>(url)
  }

  getPorcentagemMensalidadesPagas(): Observable<string> {
    const url = `${this.baseUrl}/lucro/porcentagemMensalidadesPagas`
    return this.http.get<string>(url)
  }

  getMensalidadesStatus(): Observable<any[]> {
    const url = `${this.baseUrl}/lucro/mensalidadesStatus`
    return this.http.get<any[]>(url);
  }

}