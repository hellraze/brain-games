import game from '../src/engine.js';
import getRandomNumber from '../src/lib.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const correctAnswer = (question) => (isEven(Number(question)) ? 'yes' : 'no');

const generateInfo = () => {
  const result = [];
  const question = String(getRandomNumber(1, 10));
  const answer = correctAnswer(question);
  result.push(question);
  result.push(answer);
  return result;
};

export default () => game(condition, generateInfo);
