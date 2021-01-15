import { getRandNumber } from '../utils.js';
import launchTheGameEngine from '../index.js';

let rightAnswer;

export const getResult = () => rightAnswer;

export const getRandExpression = () => {
  const progressionArray = [];
  const progressionStep = getRandNumber(1, 10);
  const progressionLength = getRandNumber(5, 15);
  const missingPosition = getRandNumber(0, progressionLength - 1);
  const theFirstNumber = getRandNumber(0, 50); // Первое число прогрессии
  progressionArray[0] = theFirstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + progressionStep; // Заполнение прогрессии
  }
  rightAnswer = progressionArray[missingPosition];
  progressionArray[missingPosition] = '..';
  return progressionArray.join(' ');
};

const gameQuestion = 'What number is missing in the progression?';

export const answerFormat = 'number';

const startTheGame = () => {
  launchTheGameEngine(gameQuestion, getRandExpression, answerFormat, getResult);
};

export default startTheGame;
