export interface QuestionType {
  label: string;
  choices: string[];
}

const questions: QuestionType[] = [
  {
    label: "question 1",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
  },
  {
    label: "question 2",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
  },
  {
    label: "question 3",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
  },
];

export default questions;
