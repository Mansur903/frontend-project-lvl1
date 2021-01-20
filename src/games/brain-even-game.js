import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const gameDecription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndAnswers = (roundsCount) => {
  const allQuestionsAndAnswers = [];
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumber = getRandNumber();
    const questionAndAnswer = {};
    if (isEven(randNumber)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    questionAndAnswer[randNumber] = String(answer);
    allQuestionsAndAnswers.push(questionAndAnswer);
  }
  return allQuestionsAndAnswers;
};

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
