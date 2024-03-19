export interface QuestionType {
  label: string;
  choices: string[];
}

const questions: QuestionType[] = [
  {
    label:
      "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: ["choice 1", "choice 2", "choice 3"],
  },
  {
    label:
      "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
      choices: ["choice 1", "choice 2", "choice 3"],
  },
  {
    label:
      "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
      choices: ["choice 1", "choice 2", "choice 3"],
  },
];

export default questions;
