import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() question: any;
  @ViewChild('confetti', { read: ElementRef }) confetti: ElementRef;
  @Output() markQuestionAsLearnedHandler: EventEmitter<string> =
    new EventEmitter();
  public showAnswer: boolean = false;
  public isCorrect: boolean = false;
  public exitAnimation: boolean = false;
  public showWrongAnimation: boolean = false;

  swtichShowAnswer(answer: string) {
    this.showAnswer = true;
    answer = removeFirstThreeCharacters(answer);
    this.isCorrect = answer == this.question!.correctAnswer;
    console.log(this.isCorrect);
    if (this.isCorrect) {
      console.log(this.confetti);
      this.confetti.nativeElement.click();
    }
    this.showWrongAnimation = !this.isCorrect;
    setTimeout(() => {
      this.showWrongAnimation = false;
    }, 1000);
  }

  markQuestionAsLearned(id: string) {
    this.exitAnimation = true;
    setTimeout(() => {
      this.markQuestionAsLearnedHandler.emit(id);
    }, 1000);
  }
}

const removeFirstThreeCharacters = (text: string): string => {
  return text.slice(3);
};
