#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

const getRandNumber = () => Math.floor(Math.random() * 100);

const parityCheck = () => {
  let correctAnswerCounter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const randNumber = getRandNumber();
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      switch (randNumber % 2) {
        case 1:
          console.log('"yes" is wrong answer ;(. Correct answer was "no"');
          break;
        case 0:
          console.log('Correct!');
          correctAnswerCounter += 1;
          break;
        default:
      }
    }
    if (answer === 'no') {
      switch (randNumber % 2) {
        case 1:
          console.log('Correct!');
          correctAnswerCounter += 1;
          break;
        case 0:
          console.log('"no" is wrong answer ;(. Correct answer was "yes"');
          break;
        default:
      }
    }
    if ((answer !== 'yes') && (answer !== 'no')) {
      switch (randNumber % 2) {
        case 1:
          console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"`);
          break;
        case 0:
          console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"`);
          break;
        default:
      }
    }
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
};

parityCheck();
