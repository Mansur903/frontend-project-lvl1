import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

let randNumber;

const isPrime = (n) => {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getRandExpression = () => {
  randNumber = getRandNumber(1, 100);
  return randNumber;
};

const getResult = () => {
  if (isPrime(randNumber)) return 'yes';
  return 'no';
};

const gameDecription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  launchGameEngine(gameDecription, getRandExpression, getResult);
};

export default startGame;
