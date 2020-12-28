#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import greeting, { name } from '../src/cli.js';

greeting();

const randomNumber = (min, max) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

let correctAnswerCounter = 0;

console.log('What number is missing in the progression?');

for (let counter = 1; counter <= 3; counter += 1) {
  // ---------------------------------------------------------- Объявление констант
  const progressionStep = randomNumber(1, 10);
  const progressionLength = randomNumber(5, 15);
  const missingPosition = randomNumber(0, progressionLength - 1);
  const theFirstNumber = randomNumber(0, 50);
  const progressionArray = [];
  progressionArray[0] = theFirstNumber;
  //----------------------------------------------------------
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + progressionStep;
  }
  const rightAnswer = progressionArray[missingPosition];
  progressionArray[missingPosition] = '..';
  console.log('Question: ', progressionArray);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
    correctAnswerCounter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
}
