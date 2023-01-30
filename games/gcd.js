import game from '../src/engine.js';
import getRandomNumber from '../src/lib.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
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
