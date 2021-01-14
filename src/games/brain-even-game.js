import { getRandNumber } from '../utils.js';
import launchTheGameEngine from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

let randNumber;

export const getRandExpression = () => {
  randNumber = getRandNumber();
  return randNumber;
};

export const answerFormat = 'string';

const isEven = () => randNumber % 2 === 1;

export const getResult = () => {
  if (isEven()) return 'no';
  return 'yes';
};

const startTheGame = () => {
  launchTheGameEngine(gameQuestion, getRandExpression, answerFormat, getResult);
};

export default startTheGame;
