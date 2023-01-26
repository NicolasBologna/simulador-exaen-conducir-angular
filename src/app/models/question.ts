export class Question {
  constructor(
    public _id: String,
    public question: String,
    public answers: [String],
    public correctAnswer: String,
    public image: String
  ) {}
}
