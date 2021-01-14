import { getRandNumber } from '../utils.js';
import launchTheGameEngine from '../index.js';

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

const gameQuestion = 'Find the greatest common divisor of given numbers.';

export const answerFormat = 'number';

const startTheGame = () => {
  launchTheGameEngine(gameQuestion, getRandExpression, answerFormat, getResult);
};

export default startTheGame;
