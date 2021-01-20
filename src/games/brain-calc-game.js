import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const getQuestionsAndAnswers = (roundsCount) => {
  let expression;
  let answer;
  const questionsAndAnswers = {};
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const randNumber = getRandNumber(0, 2);
    switch (randNumber) {
      case 0:
        answer = randNumberOne + randNumberTwo;
        expression = `${randNumberOne} + ${randNumberTwo}`;
        questionsAndAnswers[expression] = String(answer);
        break;
      case 1:
        answer = randNumberOne - randNumberTwo;
        expression = `${randNumberOne} - ${randNumberTwo}`;
        questionsAndAnswers[expression] = String(answer);
        break;
      case 2:
        answer = randNumberOne * randNumberTwo;
        expression = `${randNumberOne} * ${randNumberTwo}`;
        questionsAndAnswers[expression] = String(answer);
        break;
      default:
    }
  }
  return questionsAndAnswers;
};

const gameQuestion = 'What is the result of the expression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
