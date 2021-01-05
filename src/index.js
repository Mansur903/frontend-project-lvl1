/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';

const loopCounter = 3;

const name = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export const writeCongratulation = () => {
  console.log(`Congratulations, ${name}!`);
};

export const tryAgain = () => {
  console.log(`Let's try again, ${name}!`);
};

export const writeCorrect = () => {
  console.log('Correct!');
};

export const wrongAnswer = (wrong, correct) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'`);
};

export const forLoop = (game) => {
  for (let i = 1; i <= loopCounter; i += 1) {
    if (game() === 0) break;
  }
};

export const question = (gameQuestion) => {
  console.log('Question: ', gameQuestion);
};

export default writeCongratulation;
