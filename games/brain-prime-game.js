/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import { randomNumber } from '../src/utils.js';
import writeCongratulation, {
  forLoop, tryAgain, writeCorrect, wrongAnswer, loopCounter, question,
} from '../src/index.js';

let correctAnswerCounter = 0;

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

const brainPrimeGame = () => {
  const randNumber = randomNumber(1, 100);
  question(randNumber);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isPrime(randNumber)) {
    writeCorrect();
    correctAnswerCounter += 1;
  } else {
    wrongAnswer(answer, isPrime(randNumber));
    tryAgain();
    return 0;
  }
  if (correctAnswerCounter === loopCounter) writeCongratulation();
  return 1;
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  forLoop(brainPrimeGame);
};

export default brainPrime;
