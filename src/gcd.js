import { welcome, game } from './engine.js';
import getRandomNumber from './lib.js';

const username = welcome();
const condition = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);

  return `${num1} ${num2}`;
};

const isCorrect = (question) => {
  const questionParts = question.split(' ');
  const num1 = Number(questionParts[0]);
  const num2 = Number(questionParts[1]);

  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let gcd = min;

  while (max % gcd > 0) {
    gcd = max % gcd;
    max = min;
    min = gcd;
  }

  return String(gcd);
};

export default () => game(username, condition, generateQuestion, isCorrect);
