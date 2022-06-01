/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable jest/require-hook */

let questions: {
  question: string;
  choices: string[];
  corAnswer: number;
  [key: string]: any;
}[] = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
];

questions = questions.map((question) => ({
  ...question,
  usersAnswer: null,
}));

export default questions;