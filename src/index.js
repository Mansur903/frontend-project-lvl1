import readlineSync from 'readline-sync';

export const roundsCount = 3;

const launchGameEngine = (gameDescription, getQuestionsAndAnswers) => {
  let name = '';
  const writeGreeting = () => {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };
  const questionsAndAnswers = getQuestionsAndAnswers();
  let correctAnswerCounter = 0;
  writeGreeting();
  console.log(gameDescription);
  for (let i = 0; i < (questionsAndAnswers.length - 1); i += 2) {
    console.log(`Question: ${questionsAndAnswers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionsAndAnswers[i + 1]) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i + 1]}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
};

export default launchGameEngine;
