import game from '../src/engine.js';
import { getRandomNumber, isPrime } from '../src/lib.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateInfo = () => {
  const result = [];
  const question = getRandomNumber(1, 100);
  result.push(question);

  const answer = isPrime(question) ? 'yes' : 'no';
  result.push(answer);

  return result;
};

export default () => game(condition, generateInfo);
