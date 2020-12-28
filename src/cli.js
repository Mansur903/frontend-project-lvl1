/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export default greeting;
