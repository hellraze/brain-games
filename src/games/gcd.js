import game from '../engine.js';
import { getRandomNumber, gcd } from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);

  const question = `${num1} ${num2}`;

  const answer = gcd(num1, num2);

  return [question, answer];
};

export default () => game(description, generateRound);
