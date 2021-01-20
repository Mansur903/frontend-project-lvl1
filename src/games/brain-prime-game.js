import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const isPrime = (n) => {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionsAndAnswers = (roundsCount) => {
  const allQuestionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndAnswer = {};
    let result;
    const randNumber = getRandNumber(1, 100);
    if (isPrime(randNumber)) {
      result = 'yes';
    } else {
      result = 'no';
    }
    questionAndAnswer[randNumber] = String(result);
    allQuestionsAndAnswers.push(questionAndAnswer);
  }
  return allQuestionsAndAnswers;
};

const gameDecription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  launchGameEngine(gameDecription, getQuestionsAndAnswers);
};

export default startGame;
