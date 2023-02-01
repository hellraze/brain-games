import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

export const generateProgression = (firstElem, diffOfProg) => {
  const arrayOfNumbers = [firstElem];
  let nextNumOfProg = firstElem;
  for (let i = 9; i > 0; i -= 1) {
    nextNumOfProg += diffOfProg;
    arrayOfNumbers.push(nextNumOfProg);
  }
  return arrayOfNumbers;
};

const generateRound = () => {
  const firstElem = getRandomNumber(1, 10);
  const diffOfProgression = getRandomNumber(1, 10);
  let question = '';
  const arrayOfNumbers = generateProgression(firstElem, diffOfProgression);

  const randomIndex = getRandomNumber(0, arrayOfNumbers.length - 1);

  for (let i = 0; i < 10; i += 1) {
    if (i === randomIndex) {
      question += '.. ';
    } else {
      question += `${arrayOfNumbers[i]} `;
    }
  }

  const hiddenNumberIndex = String(arrayOfNumbers[randomIndex]);

  return [question, hiddenNumberIndex];
};

export default () => game(description, generateRound);
