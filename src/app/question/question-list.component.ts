import { Component, OnInit } from '@angular/core';
import { getLogedUserId } from '../common/user-helper';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  userDiscardedQuestions: string[] = [];
  userId: string = '';
  percentageOfLearnedQuestions: number = 0;

  constructor(
    private questionService: QuestionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = getLogedUserId();
    this.userService.getUserData(this.userId).subscribe((data) => {
      this.userDiscardedQuestions = data.discardedQuestions;
    });
    this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data.filter(
        (q: { _id: string }) => this.userDiscardedQuestions.indexOf(q._id) == -1
      );

      this.calculatePercentageOfLearnedQuestions();
    });
  }

  markQuestionAsLearned(questionId: string) {
    this.userService
      .addQuestionLearned(this.userId, questionId)
      .subscribe(() => {
        this.calculatePercentageOfLearnedQuestions();
        this.userDiscardedQuestions.push(questionId);
        this.questions = this.filterDiscardedQuestion(
          this.questions,
          questionId
        );
      });
  }

  calculatePercentageOfLearnedQuestions = () => {
    this.percentageOfLearnedQuestions =
      (this.userDiscardedQuestions.length / this.questions.length) * 100;
  };

  filterDiscardedQuestion = (
    questions: Question[],
    questionId: string
  ): Question[] => {
    return questions.filter((q) => q._id != questionId);
  };
}
