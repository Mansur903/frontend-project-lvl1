import { getRandNumber } from '../src/utils.js';

let randNumberOne;
let randNumberTwo;

const getGCD = (a, b) => { // Функция вычисления НОД
  if (b > 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

export const result = () => getGCD(randNumberOne, randNumberTwo);

export const getRandExpression = () => {
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  const expression = `${randNumberOne}  ${randNumberTwo}`;
  return expression;
};

export const gameQuestion = () => {
  const ques = 'Find the greatest common divisor of given numbers.';
  return ques;
};

export const answerFormat = 'number';

export default getGCD;
