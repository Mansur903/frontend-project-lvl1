import readlineSync from 'readline-sync';

const roundsCount = 3;
let name = '';

const writeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const launchGameEngine = (gameDescription, getQuestionsAndAnswers) => {
  const questionsAndAnswers = getQuestionsAndAnswers(roundsCount);
  writeGreeting();
  console.log(gameDescription);
  for (const item of questionsAndAnswers) {
    for (const key in item) {
      console.log(`Question: ${key}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === item[key]) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${item[key]}'`);
        return console.log(`Let's try again, ${name}!`);
      }
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchGameEngine;
