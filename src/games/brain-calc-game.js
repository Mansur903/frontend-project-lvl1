import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const createExpression = (numberOne, numberTwo, operationVariable) => {
  let expression;
  switch (operationVariable) {
    case 0:
      expression = `${numberOne} + ${numberTwo}`;
      break;
    case 1:
      expression = `${numberOne} - ${numberTwo}`;
      break;
    case 2:
      expression = `${numberOne} * ${numberTwo}`;
      break;
    default: break;
  }
  return expression;
};

const evaluateExpression = (numberOne, numberTwo, operationVariable) => {
  let answer;
  switch (operationVariable) {
    case 0:
      answer = numberOne + numberTwo;
      break;
    case 1:
      answer = numberOne - numberTwo;
      break;
    case 2:
      answer = numberOne * numberTwo;
      break;
    default: break;
  }
  return answer;
};

const getQuestionsAndAnswers = () => {
  let expression;
  let answer;
  const questionsAndAnswers = {};
  for (let i = 0; i < roundsCount; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const operations = ['+', '-', '*'];
    const operationVariable = getRandNumber(0, operations.length - 1);
    expression = createExpression(randNumberOne, randNumberTwo, operationVariable);
    answer = evaluateExpression(randNumberOne, randNumberTwo, operationVariable);
    questionsAndAnswers[expression] = String(answer);
  }
  return questionsAndAnswers;
};

const gameQuestion = 'What is the result of the expression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
