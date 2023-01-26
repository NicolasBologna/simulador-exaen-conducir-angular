import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private envService: EnvironmentUrlService
  ) {}

  getUserData(userId: string): Observable<any> {
    return this.http.get(`${this.envService.urlAddress}/user/${userId}`);
  }

  addQuestionLearned(userId: string, question: string) {

    return this.http.patch(`${this.envService.urlAddress}/user/${userId}`, {
      questionLearned: question,
    });
  }
}
