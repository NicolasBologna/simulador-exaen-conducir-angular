import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<any> {
    return this.http.get(
      'https://simulador-examen-conducir-node-nicolasbologna.vercel.app/question'
    );
  }
}