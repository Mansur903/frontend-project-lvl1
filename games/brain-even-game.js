/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import getRandNumber from '../src/utils.js';

export const gameQuestion = () => {
  const ques = 'Answer "yes" if the number is even, otherwise answer "no"';
  return ques;
};

let randNumber;

export const getRandExpression = () => {
  randNumber = getRandNumber();
  return randNumber;
};

export const answerFormat = 'string';

export const result = () => {
  if (randNumber % 2 === 1) return 'no';
  return 'yes';
};
