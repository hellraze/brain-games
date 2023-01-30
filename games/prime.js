import game from '../src/engine.js';
import { getRandomNumber } from '../src/lib.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateInfo = () => {
  const result = [];
  const question = getRandomNumber(1, 100);
  result.push(question);

  if (question === 1) {
    result.push('no');
  }

  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    if (question % i === 0) {
      result.push('no');
    }
  }

  result.push('yes');

  return result;
};

export default () => game(condition, generateInfo);
