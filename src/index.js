import readlineSync from 'readline-sync';

const roundsCount = 3;
let name = '';

const writeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const launchGameEngine = (gameDescription, gameExpression, result) => {
  writeGreeting();
  console.log(gameDescription);
  for (let i = 1; i <= roundsCount; i += 1) {
    console.log(`Question: ${gameExpression()}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result()}'`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchGameEngine;
