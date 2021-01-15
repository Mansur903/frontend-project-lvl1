import { getRandNumber } from '../utils.js';
import launchTheGameEngine from '../index.js';

let result;

export const getRandExpression = () => {
  const randNumberOne = getRandNumber();
  const randNumberTwo = getRandNumber();
  const randNumber = getRandNumber(0, 2);
  switch (randNumber) {
    case 0:
      result = randNumberOne + randNumberTwo;
      return `${randNumberOne} + ${randNumberTwo}`;
    case 1:
      result = randNumberOne - randNumberTwo;
      return `${randNumberOne} - ${randNumberTwo}`;
    case 2:
      result = randNumberOne * randNumberTwo;
      return `${randNumberOne} * ${randNumberTwo}`;
    default:
  }
  return 1;
};

export const getResult = () => result;

const gameQuestion = 'What is the result of the expression?';

export const answerFormat = 'number';

const startTheGame = () => {
  launchTheGameEngine(gameQuestion, getRandExpression, answerFormat, getResult);
};

export default startTheGame;
