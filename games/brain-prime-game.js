/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import { randomNumber } from '../src/utils.js';

let randNumber;

const isPrime = (n) => { // Функция определения чётности
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

export const getRandExpression = () => {
  randNumber = randomNumber(1, 100);
  return randNumber;
};

export const result = () => isPrime(randNumber);

export const gameQuestion = () => {
  const ques = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return ques;
};

export const answerFormat = 'string';
