import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const gameDecription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = {};
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumber = getRandNumber();
    answer = isEven(randNumber) ? 'yes' : 'no';
    questionsAndAnswers[randNumber] = answer;
  }
  return questionsAndAnswers;
};

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
