import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<Email> {
    const url = `${this.baseUrl}/email`
    return this.http.post<Email>(url, email);
  }

 
  getAllEmails(): Observable<Email[]> {
    const url = `${this.baseUrl}/email`
    return this.http.get<Email[]>(url)
    }

  getOneEmail(id: string): Observable<Email> {
      const url = `${this.baseUrl}/email/${id}`
      return this.http.get<Email>(url)
    }

}
