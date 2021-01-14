import { getRandNumber } from '../utils.js';
import launchTheGameEngine from '../index.js';

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

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const answerFormat = 'string';

const startTheGame = () => {
  launchTheGameEngine(gameQuestion, getRandExpression, answerFormat, getResult);
};

export default startTheGame;
