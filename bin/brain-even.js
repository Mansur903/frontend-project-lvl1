#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import greeting, { name } from '../src/cli.js';

greeting();

const getRandNumber = () => Math.floor(Math.random() * 100);

const parityCheck = () => {
  let correctAnswerCounter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const randNumber = getRandNumber();
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      if (randNumber % 2 === 1) {
        console.log('"yes" is wrong answer ;(. Correct answer was "no"');
        console.log(`Let's try again, ${name}!`);
        break;
      } else {
        console.log('Correct!');
        correctAnswerCounter += 1;
      }
    }
    if (answer === 'no') {
      if (randNumber % 2 === 1) {
        console.log('Correct!');
        correctAnswerCounter += 1;
      } else {
        console.log('"no" is wrong answer ;(. Correct answer was "yes"');
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if ((answer !== 'yes') && (answer !== 'no')) {
      switch (randNumber % 2) {
        case 1:
          console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"`);
          console.log(`Let's try again, ${name}!`);
          break;
        case 0:
          console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"`);
          console.log(`Let's try again, ${name}!`);
          break;
        default:
      }
      break;
    }
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
};

parityCheck();
