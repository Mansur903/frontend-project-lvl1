import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const gameDecription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumber = getRandNumber();
    const answer = isEven(randNumber) ? 'yes' : 'no';
    questionsAndAnswers.push(randNumber);
    questionsAndAnswers.push(String(answer));
  }
  return questionsAndAnswers;
};

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
