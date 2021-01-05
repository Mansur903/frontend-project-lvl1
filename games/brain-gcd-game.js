/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';
import getRandNumber from '../src/utils.js';
import writeCongratulation, {
  forLoop, tryAgain, writeCorrect, wrongAnswer, loopCounter, question,
} from '../src/index.js';

let correctAnswerCounter = 0;

const getGCD = (a, b) => { // Функция вычисления НОД
  if (b > 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

const brainGCDGame = () => {
  const randNumberOne = getRandNumber();
  const randNumberTwo = getRandNumber();
  const result = getGCD(randNumberOne, randNumberTwo);
  const questionText = `${randNumberOne}  ${randNumberTwo}`;
  question(questionText);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === result) {
    writeCorrect();
    correctAnswerCounter += 1;
  } else {
    wrongAnswer(answer, result);
    tryAgain();
    return 0;
  }
  if (correctAnswerCounter === loopCounter) writeCongratulation();
  return 1;
};

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  forLoop(brainGCDGame);
};
export default brainGCD;
