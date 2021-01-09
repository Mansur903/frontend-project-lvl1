/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';
import { getRandExpression } from '../games/brain-calc-game.js';

const loopCounter = 3;
let globalName = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  globalName = name;
  console.log(`Hello, ${name}!`);
};

const questionGame = (gameQuestion) => {
  console.log(gameQuestion);
};

const questionExp = (gameExpression) => (`Question: ${gameExpression}`);

const wrongAnswer = (wrong, correct) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'`);
};

const tryAgain = () => {
  console.log(`Let's try again, ${globalName}!`);
};

const writeCongratulation = () => {
  console.log(`Congratulations, ${globalName}!`);
};

const gameEngine = (gameQuestion, gameExpression, answerFormat, result) => {
  let correctAnswerCounter = 0;
  greeting();
  questionGame(gameQuestion);
  for (let i = 1; i <= loopCounter; i += 1) {
    console.log(questionExp(gameExpression));
    let answer = readlineSync.question('Your answer: ');
    if (answerFormat === 'number') answer = Number(answer);
    if (answer === result) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      wrongAnswer(answer, result);
      tryAgain();
      break;
    }
  }
  if (correctAnswerCounter === loopCounter) writeCongratulation();
  return 1;
};

export default gameEngine;
