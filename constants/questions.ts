export interface QuestionType {
  label: string;
  choices: ChoiceType[];
}

export interface ChoiceType {
  label: string;
  point: number;
}
const questions: QuestionType[] = [
  {
    label:
      "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 0,
      },
      {
        label: "choice 2",
        point: 1,
      },
      {
        label: "choice 3",
        point: 2,
      },
    ],
  },
  {
    label:
      "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 2,
      },
      {
        label: "choice 2",
        point: 0,
      },
      {
        label: "choice 3",
        point: 1,
      },
    ],
  },
  {
    label:
      "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 0,
      },
      {
        label: "choice 2",
        point: 1,
      },
      {
        label: "choice 3",
        point: 2,
      },
    ],
  },
  {
    label:
      "4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 1,
      },
      {
        label: "choice 2",
        point: 0,
      },
      {
        label: "choice 3",
        point: 2,
      },
    ],
  },
  {
    label:
      "5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 1,
      },
      {
        label: "choice 2",
        point: 2,
      },
      {
        label: "choice 3",
        point: 0,
      },
    ],
  },
  {
    label:
      "6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 2,
      },
      {
        label: "choice 2",
        point: 1,
      },
      {
        label: "choice 3",
        point: 0,
      },
    ],
  },
  {
    label:
      "7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores",
    choices: [
      {
        label: "choice 1",
        point: 1,
      },
      {
        label: "choice 2",
        point: 0,
      },
      {
        label: "choice 3",
        point: 2,
      },
    ],
  },
];

export default questions;
