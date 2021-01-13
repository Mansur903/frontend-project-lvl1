import { getRandNumber } from '../src/utils.js';
import gameEngine from '../src/index.js';

export const writeGameQuestion = () => {
  const ques = 'Answer "yes" if the number is even, otherwise answer "no"';
  return ques;
};

let randNumber;

export const getRandExpression = () => {
  randNumber = getRandNumber();
  return randNumber;
};

export const answerFormat = 'string';

export const getResult = () => {
  if (randNumber % 2 === 1) return 'no';
  return 'yes';
};

const game = () => {
  gameEngine(writeGameQuestion, getRandExpression, answerFormat, getResult);
};

export default game;
