import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

let randNumberOne;
let randNumberTwo;

const getGCD = (a, b) => {
  if (b > 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

const getResult = () => String(getGCD(randNumberOne, randNumberTwo));

const getRandExpression = () => {
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  const expression = `${randNumberOne} ${randNumberTwo}`;
  return expression;
};

const gameDecription = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  launchGameEngine(gameDecription, getRandExpression, getResult);
};

export default startGame;
