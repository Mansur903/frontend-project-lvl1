/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';
import getRandNumber from '../src/utils.js';
import writeCongratulation, {
  forLoop, tryAgain, writeCorrect, wrongAnswer, loopCounter, question,
} from '../src/index.js';

let randNumber; // Случайное число для генерации мат. операции
let randNumberOne;
let randNumberTwo;

export const getRandExpression = () => { // Получение случайного выражения
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  randNumber = Math.floor(Math.random() * 3);
  switch (randNumber) {
    case 0:
      return `${randNumberOne} + ${randNumberTwo}`;
    case 1:
      return `${randNumberOne} - ${randNumberTwo}`;
    case 2:
      return `${randNumberOne} * ${randNumberTwo}`;
    default:
  }
  return 1;
};

export const result = () => { // Вычисление результата для сравнения с ответом пользователя
  switch (randNumber) {
    case 0:
      return randNumberOne + randNumberTwo;
    case 1:
      return randNumberOne - randNumberTwo;
    case 2:
      return randNumberOne * randNumberTwo;
    default:
  }
  return 1;
};

let correctAnswerCounter = 0;

const brainCalcGame = () => {
  question(getRandExpression());
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === result()) {
    writeCorrect();
    correctAnswerCounter += 1;
  } else {
    wrongAnswer(answer, result());
    tryAgain();
    return 0;
  }
  return 1;
};

const calculator = () => {
  console.log('What is the result of the expression?');
  forLoop(brainCalcGame);
  if (correctAnswerCounter === loopCounter) writeCongratulation();
};

export default calculator;
