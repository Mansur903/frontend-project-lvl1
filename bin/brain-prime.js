#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import greeting, { name } from '../src/cli.js';

greeting();

const randomNumber = (min, max) => { // Генерация случайного числа в диапазоне
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

const isPrime = (n) => { // Функция определения чётности
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

let correctAnswerCounter = 0;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let counter = 1; counter <= 3; counter += 1) {
  const randNumber = randomNumber(1, 100);
  console.log('Question: ', randNumber);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isPrime(randNumber)) {
    console.log('Correct!');
    correctAnswerCounter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randNumber)}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
}
