import { getRandNumber } from '../src/utils.js';
import gameEngine from '../src/index.js';

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

export const getResult = () => { // Вычисление результата для сравнения с ответом пользователя
  switch (randNumber) {
    case 0:
      return randNumberOne + randNumberTwo;
    case 1:
      return randNumberOne - randNumberTwo;
    case 2:
      return randNumberOne * randNumberTwo;
    default:
  }
  return 0;
};

export const writeGameQuestion = () => {
  const ques = 'What is the result of the expression?';
  return ques;
};

export const answerFormat = 'number';

const game = () => {
  gameEngine(writeGameQuestion, getRandExpression, answerFormat, getResult);
};

export default game;
