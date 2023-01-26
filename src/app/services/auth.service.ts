import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private envService: EnvironmentUrlService
  ) {}

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(`${this.envService.urlAddress}/login`, body);
  }

  register(name: string, username: string, password: string) {
    const body = { name, username, password };
    return this.http.post(`${this.envService.urlAddress}/register`, body);
  }
}
