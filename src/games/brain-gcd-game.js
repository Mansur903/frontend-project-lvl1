import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const getGCD = (a, b) => {
  if (b !== 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const expression = `${randNumberOne} ${randNumberTwo}`;
    const answer = getGCD(randNumberOne, randNumberTwo);
    questionsAndAnswers.push(expression);
    questionsAndAnswers.push(String(answer));
  }
  return questionsAndAnswers;
};

const gameDecription = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
