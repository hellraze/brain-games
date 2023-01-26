import { welcome, game } from './engine.js';
import { getRandomNumber } from './lib.js';

const username = welcome();
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => String(getRandomNumber(1, 100));

const isCorrect = (question) => {
  const num = Number(question);
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => game(username, condition, generateQuestion, isCorrect);
