import game from '../src/engine.js';
import { getRandomNumber } from '../src/lib.js';

const condition = 'What number is missing in the progression?';

const generateInfo = () => {
  const result = [];
  let nextNumOfProg = getRandomNumber(1, 10);
  const diffOfProgression = getRandomNumber(1, 10);
  let question = '';
  const arrayOfNumbers = [];

  for (let i = 10; i > 0; i -= 1) {
    nextNumOfProg += diffOfProgression;
    arrayOfNumbers.push(nextNumOfProg);
  }

  const randomIndex = getRandomNumber(0, arrayOfNumbers.length - 1);

  for (let i = 0; i < 10; i += 1) {
    if (i === randomIndex) {
      question += '.. ';
    } else {
      question += `${arrayOfNumbers[i]} `;
    }
  }

  result.push(question);
  result.push(String(arrayOfNumbers[randomIndex]));

  return result;
};

export default () => game(condition, generateInfo);
