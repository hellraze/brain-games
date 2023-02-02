import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = String(getRandomNumber(1, 10));
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(description, generateRound);
