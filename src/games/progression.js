import game from '../engine.js';
import { getRandomNumber, generateArrayOfProg } from '../lib.js';

const description = 'What number is missing in the progression?';

const generateInfo = () => {
  const result = [];
  const firstElem = getRandomNumber(1, 10);
  const diffOfProgression = getRandomNumber(1, 10);
  let question = '';
  const arrayOfNumbers = generateArrayOfProg(firstElem, diffOfProgression);

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

export default () => game(description, generateInfo);
