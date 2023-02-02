import game from '../engine.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

export const generateProgression = (firstElem, step, length) => {
  const arrayOfNumbers = [firstElem];
  let nextNumOfProg = firstElem;
  for (let i = length - 1; i > 0; i -= 1) {
    nextNumOfProg += step;
    arrayOfNumbers.push(nextNumOfProg);
  }
  return arrayOfNumbers;
};

const generateRound = () => {
  const firstElem = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const arrayOfNumbers = generateProgression(firstElem, stepProgression, 10);

  const randomIndex = getRandomNumber(0, arrayOfNumbers.length - 1);
  const hiddenNumberIndex = String(arrayOfNumbers[randomIndex]);

  arrayOfNumbers[randomIndex] = '..';

  const question = arrayOfNumbers.join(' ');

  return [question, hiddenNumberIndex];
};

export default () => game(description, generateRound);
