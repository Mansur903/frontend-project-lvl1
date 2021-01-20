import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const getQuestionsAndAnswers = (roundsCount) => {
  const allQuestionsAndAnswers = [];
  let expression;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const randNumber = getRandNumber(0, 2);
    const questionAndAnswer = {};
    switch (randNumber) {
      case 0:
        answer = randNumberOne + randNumberTwo;
        expression = `${randNumberOne} + ${randNumberTwo}`;
        questionAndAnswer[expression] = String(answer);
        allQuestionsAndAnswers.push(questionAndAnswer);
        break;
      case 1:
        answer = randNumberOne - randNumberTwo;
        expression = `${randNumberOne} - ${randNumberTwo}`;
        questionAndAnswer[expression] = String(answer);
        allQuestionsAndAnswers.push(questionAndAnswer);
        break;
      case 2:
        answer = randNumberOne * randNumberTwo;
        expression = `${randNumberOne} * ${randNumberTwo}`;
        questionAndAnswer[expression] = String(answer);
        allQuestionsAndAnswers.push(questionAndAnswer);
        break;
      default:
    }
  }
  return allQuestionsAndAnswers;
};

const gameQuestion = 'What is the result of the expression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
