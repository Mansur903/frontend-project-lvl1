import { getRandNumber } from '../src/utils.js';
import gameEngine from '../src/index.js';

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
  randNumber = getRandNumber(1, 100);
  return randNumber;
};

export const getResult = () => isPrime(randNumber);

export const writeGameQuestion = () => {
  const ques = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return ques;
};

export const answerFormat = 'string';

const game = () => {
  gameEngine(writeGameQuestion, getRandExpression, answerFormat, getResult);
};

export default game;
