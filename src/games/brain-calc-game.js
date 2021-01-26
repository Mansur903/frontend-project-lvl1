import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const evaluateExpression = (numberOne, numberTwo, operationVariable) => {
  let answer;
  switch (operationVariable) {
    case '+':
      answer = numberOne + numberTwo;
      break;
    case '-':
      answer = numberOne - numberTwo;
      break;
    case '*':
      answer = numberOne * numberTwo;
      break;
    default: break;
  }
  return answer;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const operations = ['+', '-', '*'];
    const operationVariable = getRandNumber(0, operations.length - 1);
    const expression = `${randNumberOne} ${operations[operationVariable]} ${randNumberTwo}`;
    const answer = evaluateExpression(randNumberOne, randNumberTwo, operations[operationVariable]);
    questionsAndAnswers.push(expression);
    questionsAndAnswers.push(String(answer));
  }
  return questionsAndAnswers;
};

const gameQuestion = 'What is the result of the expression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
