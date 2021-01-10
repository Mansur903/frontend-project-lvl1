import { getRandNumber } from '../src/utils.js';

let rightAnswer;

export const result = () => rightAnswer;

export const getRandExpression = () => {
  const progressionArray = [];
  const progressionStep = getRandNumber(1, 10); // Шаг прогрессии
  const progressionLength = getRandNumber(5, 15); // Длина прогрессии
  const missingPosition = getRandNumber(0, progressionLength - 1); // Позиция скрытого числа
  const theFirstNumber = getRandNumber(0, 50); // Первое число прогрессии
  progressionArray[0] = theFirstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + progressionStep; // Заполнение прогрессии
  }
  rightAnswer = progressionArray[missingPosition];
  progressionArray[missingPosition] = '..';
  return progressionArray;
};

export const gameQuestion = () => {
  const ques = 'What number is missing in the progression?';
  return ques;
};

export const answerFormat = 'number';
