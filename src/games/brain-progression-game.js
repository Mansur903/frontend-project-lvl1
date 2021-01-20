import { getRandNumber } from '../utils.js';
import launchGameEngine from '../index.js';

const getQuestionsAndAnswers = (roundsCount) => {
  const questionsAndAnswers = {};
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionSequence = [];
    const progressionLength = getRandNumber(5, 15);
    const progressionStep = getRandNumber(1, 10);
    const theFirstNumber = getRandNumber(0, 50); // Первое число прогрессии
    const missingPosition = getRandNumber(0, progressionLength - 1);
    progressionSequence[0] = theFirstNumber;
    for (let counter = 1; counter < progressionLength; counter += 1) {
      progressionSequence[counter] = progressionSequence[counter - 1] + progressionStep;
    }
    const answer = progressionSequence[missingPosition];
    progressionSequence[missingPosition] = '..';
    questionsAndAnswers[progressionSequence.join(' ')] = String(answer);
  }
  return questionsAndAnswers;
};

const gameQuestion = 'What number is missing in the progression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
