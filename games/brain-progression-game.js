/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import { randomNumber } from '../src/utils.js';
import writeCongratulation, {
  forLoop, tryAgain, writeCorrect, wrongAnswer, loopCounter, question,
} from '../src/index.js';

let correctAnswerCounter = 0;

const brainProgresionGame = () => {
  // ---------------------------------------------------------- Объявление констант
  const progressionStep = randomNumber(1, 10); // Шаг прогрессии
  const progressionLength = randomNumber(5, 15); // Длина прогрессии
  const missingPosition = randomNumber(0, progressionLength - 1); // Позиция скрытого числа
  const theFirstNumber = randomNumber(0, 50); // Первое число прогрессии
  const progressionArray = [];
  progressionArray[0] = theFirstNumber;
  //----------------------------------------------------------
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + progressionStep; // Заполнение прогрессии
  }
  const rightAnswer = progressionArray[missingPosition];
  progressionArray[missingPosition] = '..';
  question(progressionArray);
  // console.log('Question: ', progressionArray);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === rightAnswer) {
    writeCorrect();
    correctAnswerCounter += 1;
  } else {
    wrongAnswer(answer, rightAnswer);
    tryAgain();
    return 0;
  }
  if (correctAnswerCounter === loopCounter) writeCongratulation();
  return 1;
};

const progression = () => {
  console.log('What number is missing in the progression?');
  forLoop(brainProgresionGame);
};

export default progression;
