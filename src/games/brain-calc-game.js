import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

let result;
let randNumberOne;
let randNumberTwo;

const getRandExpression = () => {
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  const randNumber = getRandNumber(0, 2);
  let expression;
  switch (randNumber) {
    case 0:
      result = randNumberOne + randNumberTwo;
      expression = `${randNumberOne} + ${randNumberTwo}`;
      break;
    case 1:
      result = randNumberOne - randNumberTwo;
      expression = `${randNumberOne} - ${randNumberTwo}`;
      break;
    case 2:
      result = randNumberOne * randNumberTwo;
      expression = `${randNumberOne} * ${randNumberTwo}`;
      break;
    default:
  }
  return expression;
};

const getResult = () => result;

const gameQuestion = 'What is the result of the expression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getRandExpression, getResult);
};

export default startGame;
