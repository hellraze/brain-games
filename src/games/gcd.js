import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let result = min;

  while (max % result > 0) {
    result = max % result;
    max = min;
    min = result;
  }

  return String(result);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);

  const question = `${num1} ${num2}`;

  const answer = getGCD(num1, num2);

  return [question, answer];
};

export default () => game(description, generateRound);
