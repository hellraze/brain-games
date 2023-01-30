import game from '../src/engine.js';
import { getRandomNumber, gcd } from '../src/lib.js';

const condition = 'Find the greatest common divisor of given numbers.';

const generateInfo = () => {
  const result = [];
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);

  result.push(`${num1} ${num2}`);

  const answer = gcd(num1, num2);

  result.push(answer);

  return result;
};

export default () => game(condition, generateInfo);
