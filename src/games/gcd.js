import game from '../engine.js';
import { getRandomNumber, gcd } from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const result = [];
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);

  result.push(`${num1} ${num2}`);

  const answer = gcd(num1, num2);

  result.push(answer);

  return result;
};

export default () => game(description, generateRound);
