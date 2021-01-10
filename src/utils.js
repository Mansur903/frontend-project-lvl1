// ---------------------------------------------------------- Генерация случайного числа в диапазоне
export const getRandNumber = (min = 1, max = 100) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};
// ----------------------------------------------------------

export default getRandNumber;
