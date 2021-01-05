/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

// ---------------------------------------------------------- Генерация случайного числа в диапазоне
export const randomNumber = (min, max) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};
// ----------------------------------------------------------s

const getRandNumber = () => Math.floor(Math.random() * 100 + 1);// Генерация случайного числа
export default getRandNumber;
