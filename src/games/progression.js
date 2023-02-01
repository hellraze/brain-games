import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

export const generateProgression = (firstElem, diffOfProg, lengthOfProg) => {
  const arrayOfNumbers = [firstElem];
  let nextNumOfProg = firstElem;
  for (let i = lengthOfProg - 1; i > 0; i -= 1) {
    nextNumOfProg += diffOfProg;
    arrayOfNumbers.push(nextNumOfProg);
  }
  return arrayOfNumbers;
};

const generateRound = () => {
  const firstElem = getRandomNumber(1, 10);
  const diffOfProgression = getRandomNumber(1, 10);
  const arrayOfNumbers = generateProgression(firstElem, diffOfProgression, 10);

  const randomIndex = getRandomNumber(0, arrayOfNumbers.length - 1);
  const hiddenNumberIndex = String(arrayOfNumbers[randomIndex]);

  for (let i = 0; i < 10; i += 1) {
    if (i === randomIndex) {
      arrayOfNumbers[i] = '.. ';
    }
  }

  const question = arrayOfNumbers.join(' ');

  return [question, hiddenNumberIndex];
};

export default () => game(description, generateRound);
