import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

let answer;

const getResult = () => String(answer);

const generateProgression = (length, step, firstNumber) => {
  const progressionSequence = [];
  const missingPosition = getRandNumber(0, length - 1);
  progressionSequence[0] = firstNumber;
  for (let i = 1; i < length; i += 1) {
    progressionSequence[i] = progressionSequence[i - 1] + step; // Заполнение прогрессии
  }
  answer = progressionSequence[missingPosition];
  progressionSequence[missingPosition] = '..';
  return progressionSequence.join(' ');
};

const getRandExpression = () => {
  const progressionLength = getRandNumber(5, 15);
  const progressionStep = getRandNumber(1, 10);
  const theFirstNumber = getRandNumber(0, 50); // Первое число прогрессии
  return generateProgression(progressionLength, progressionStep, theFirstNumber);
};

const gameQuestion = 'What number is missing in the progression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getRandExpression, getResult);
};

export default startGame;
