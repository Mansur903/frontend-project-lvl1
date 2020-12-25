#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

const getRandNumber = () => Math.floor(Math.random() * 100);
let randNumber;
let randNumberOne;
let randNumberTwo;

const getRandExpression = () => {
  randNumberOne = getRandNumber();
  randNumberTwo = getRandNumber();
  randNumber = Math.floor(Math.random() * 3);
  switch (randNumber) {
    case 0:
      return `${randNumberOne} + ${randNumberTwo}`;
    case 1:
      return `${randNumberOne} - ${randNumberTwo}`;
    case 2:
      return `${randNumberOne} * ${randNumberTwo}`;
    default:
  }
};

const result = () => {
  switch (randNumber) {
    case 0:
      return randNumberOne + randNumberTwo;
    case 1:
      return randNumberOne - randNumberTwo;
    case 2:
      return randNumberOne * randNumberTwo;
    default:
  }
};

const calculator = () => {
  let correctAnswerCounter = 0;
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    console.log('Question: ', getRandExpression());
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result()) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${result()}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
};
calculator();
