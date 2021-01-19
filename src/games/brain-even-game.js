import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const gameDecription = 'Answer "yes" if the number is even, otherwise answer "no"';

let randNumber;

const getRandExpression = () => {
  randNumber = getRandNumber();
  return randNumber;
};

const isEven = (number) => number % 2 === 0;

const getResult = () => {
  if (isEven(randNumber)) return 'yes';
  return 'no';
};

const startGame = () => {
  launchGameEngine(gameDecription, getRandExpression, getResult);
};

export default startGame;
