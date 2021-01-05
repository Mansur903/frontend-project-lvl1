/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import readlineSync from 'readline-sync';
import getRandNumber from '../src/utils.js';
import writeCongratulation, {
  forLoop, tryAgain, writeCorrect, wrongAnswer, loopCounter, question,
} from '../src/index.js';

const parityCheck = () => {
  let correctAnswerCounter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const brainEvenGame = () => {
    const randNumber = getRandNumber();
    question(randNumber);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      if (randNumber % 2 === 1) {
        wrongAnswer('yes', 'no');
        tryAgain();
        return 0;
      }
      writeCorrect();
      correctAnswerCounter += 1;
    }
    if (answer === 'no') {
      if (randNumber % 2 === 1) {
        writeCorrect();
        correctAnswerCounter += 1;
      } else {
        wrongAnswer('no', 'yes');
        tryAgain();
        return 0;
      }
    }
    if ((answer !== 'yes') && (answer !== 'no')) {
      switch (randNumber % 2) {
        case 1:
          wrongAnswer(answer, 'no');
          tryAgain();
          return 0;
        case 0:
          wrongAnswer(answer, 'yes');
          tryAgain();
          return 0;
        default:
      }
    }
    return 1;
  };

  forLoop(brainEvenGame);

  if (correctAnswerCounter === loopCounter) writeCongratulation();
};
export default parityCheck;
