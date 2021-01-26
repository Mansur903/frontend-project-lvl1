import { getRandNumber } from '../utils.js';
import launchGameEngine, { roundsCount } from '../index.js';

const getAnswerOfMissingPosition = (progression, missingPosition) => {
  const answer = progression[missingPosition];
  return answer;
};

const generateProgression = (length, step, firstNumber) => {
  const progressionSequence = [];
  for (let counter = 0; counter < length; counter += 1) {
    progressionSequence[counter] = firstNumber + step * counter;
  }
  return progressionSequence;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const length = getRandNumber(5, 15);
    const step = getRandNumber(1, 10);
    const firstNumber = getRandNumber(0, 50);
    const missingPosition = getRandNumber(0, length - 1);
    const progressionSequence = generateProgression(length, step, firstNumber);
    const answer = getAnswerOfMissingPosition(progressionSequence, missingPosition);
    progressionSequence[missingPosition] = '..';
    questionsAndAnswers.push(progressionSequence.join(' '));
    questionsAndAnswers.push(String(answer));
  }
  return questionsAndAnswers;
};

const gameQuestion = 'What number is missing in the progression?';

const startGame = () => {
  launchGameEngine(gameQuestion, getQuestionsAndAnswers);
};

export default startGame;
