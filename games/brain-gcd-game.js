import { getRandNumber } from '../src/utils.js';
import gameEngine from '../src/index.js';

let randNumberOne;
let randNumberTwo;

export const getGCD = (a, b) => { // Функция вычисления НОД
  if (b > 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

export const getResult = () => getGCD(randNumberOne, randNumberTwo);

export const getRandExpression = () => {
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  const expression = `${randNumberOne}  ${randNumberTwo}`;
  return expression;
};

export const writeGameQuestion = () => {
  const ques = 'Find the greatest common divisor of given numbers.';
  return ques;
};

export const answerFormat = 'number';

const game = () => {
  gameEngine(writeGameQuestion, getRandExpression, answerFormat, getResult);
};

export default game;
