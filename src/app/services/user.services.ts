import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserData(userId: string): Observable<any> {
    return this.http.get(
      `https://simulador-examen-conducir-node-nicolasbologna.vercel.app/user/${userId}`
    );
  }

  addQuestionLearned(userId: string, question: string) {
    return this.http.patch(
      `https://simulador-examen-conducir-node-nicolasbologna.vercel.app/user/${userId}`,
      {
        questionLearned: question,
      }
    );
  }
}
