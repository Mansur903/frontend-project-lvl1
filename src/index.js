import readlineSync from 'readline-sync';

export const roundsCount = 3;

let name = '';

const writeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const launchGameEngine = (gameDescription, getQuestionsAndAnswers) => {
  const questionsAndAnswers = getQuestionsAndAnswers(roundsCount);
  const questions = Object.keys(questionsAndAnswers);
  const answers = Object.values(questionsAndAnswers);
  let correctAnswerCounter = 0;
  writeGreeting();
  console.log(gameDescription);
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answers[i]) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answers[i]}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswerCounter === 3) console.log(`Congratulations, ${name}!`);
};

export default launchGameEngine;
