import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const isPrime = (number) => {
  let divisor = 2;
  const limit = Math.sqrt(number);
  if (number <= 1) return false;
  while (divisor <= limit) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumber = getRandNumber(1, 100);
    const result = isPrime(randNumber) ? 'yes' : 'no';
    questionsAndAnswers.push(randNumber);
    questionsAndAnswers.push(String(result));
  }
  return questionsAndAnswers;
};

const gameDecription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
