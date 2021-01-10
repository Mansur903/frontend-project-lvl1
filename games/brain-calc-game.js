/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import getRandNumber from '../src/utils.js';

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
  return 0;
};

export const gameQuestion = () => {
  const ques = 'What is the result of the expression?';
  return ques;
};

export const answerFormat = 'number';
