import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  let result = min;

  while (max % result > 0) {
    result = max % result;
    max = min;
    min = result;
  }

  return String(result);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);

  const question = `${number1} ${number2}`;

  const answer = getGCD(number1, number2);

  return [question, answer];
};

export default () => game(description, generateRound);
