/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { randomNumber } from '../src/index.js';

const progression = () => {
  let correctAnswerCounter = 0;
  console.log('What number is missing in the progression?');
  for (let counter = 1; counter <= 3; counter += 1) {
    // ---------------------------------------------------------- Объявление констант
    const progressionStep = randomNumber(1, 10); // Шаг прогрессии
    const progressionLength = randomNumber(5, 15); // Длина прогрессии
    const missingPosition = randomNumber(0, progressionLength - 1); // Позиция скрытого числа
    const theFirstNumber = randomNumber(0, 50); // Первое число прогрессии
    const progressionArray = [];
    progressionArray[0] = theFirstNumber;
    //----------------------------------------------------------
    for (let i = 1; i < progressionLength; i += 1) {
      progressionArray[i] = progressionArray[i - 1] + progressionStep; // Заполнение прогрессии
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
};

export default progression;
