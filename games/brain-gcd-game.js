/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import getRandNumber from '../src/index.js';

const getGCD = (a, b) => { // Функция вычисления НОД
  if (b > 0) {
    const k = a % b;
    return getGCD(b, k);
  }
  return Math.abs(a);
};

const brainGCD = () => {
  let correctAnswerCounter = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const randNumberOne = getRandNumber();
    const randNumberTwo = getRandNumber();
    const result = getGCD(randNumberOne, randNumberTwo);
    console.log('Question: ', randNumberOne, ' ', randNumberTwo);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
  }
};
export default brainGCD;
