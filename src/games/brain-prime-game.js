import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const isPrime = (number) => {
  let divisor = 2;
  const limit = Math.sqrt(number);
  if (number === 0) return false;
  if (number === 1) return false;
  while (divisor <= limit) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = {};
  for (let i = 0; i < roundsCount; i += 1) {
    let result;
    const randNumber = getRandNumber(1, 100);
    if (isPrime(randNumber)) {
      result = 'yes';
    } else {
      result = 'no';
    }
    questionsAndAnswers[randNumber] = String(result);
  }
  return questionsAndAnswers;
};

const gameDecription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
