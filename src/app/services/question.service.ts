import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(
    private http: HttpClient,
    private envService: EnvironmentUrlService
  ) {}

  getAllQuestions(): Observable<any> {
    return this.http.get(`${this.envService.urlAddress}/question`);
  }
}
