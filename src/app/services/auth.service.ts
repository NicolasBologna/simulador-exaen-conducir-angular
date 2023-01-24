import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(
      'https://simulador-examen-conducir-node-nicolasbologna.vercel.app/login',
      body
    );
  }
}
