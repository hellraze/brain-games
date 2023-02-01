import game from '../engine.js';
import { getRandomNumber } from '../lib.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const correctAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const generateInfo = () => {
  const result = [];
  const question = getRandomNumber(1, 10);
  const answer = correctAnswer(question);
  result.push(String(question));
  result.push(answer);
  return result;
};

export default () => game(condition, generateInfo);
