import readlineSync from 'readline-sync';

const roundsCount = 3;
let name = '';

const writeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const launchTheGameEngine = (gameQuestion, gameExpression, answerFormat, result) => {
  let correctAnswerCounter = 0;
  writeGreeting();
  console.log(gameQuestion);
  for (let i = 1; i <= roundsCount; i += 1) {
    console.log('Question: ', gameExpression());
    let answer = readlineSync.question('Your answer: ');
    if (answerFormat === 'number' && !Number.isNaN(Number(answer))) answer = Number(answer);
    if (answer === result()) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result()}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswerCounter === roundsCount) console.log(`Congratulations, ${name}!`);
  return 1;
};

export default launchTheGameEngine;
