import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import getRandomNumber from './getRandomNumber.js';

const username = welcome();

const game = (name) => {
  for (let j = 3; j > 0; j -= 1) {
    const firstNumberOfProgression = getRandomNumber();
    const diffOfProgression = getRandomNumber();
    const arrayOfNumbers = [];
    let nextNumberOfProgression = firstNumberOfProgression;

    for (let i = 10; i > 0; i -= 1) {
      nextNumberOfProgression += diffOfProgression;
      arrayOfNumbers.push(nextNumberOfProgression);
    }

    const randomIndexOfArray = Math.floor(Math.random() * 10);
    let str = 'Question: ';

    for (let i = 0; i < 10; i += 1) {
      if (i === randomIndexOfArray) {
        str += '.. ';
      } else {
        str += `${arrayOfNumbers[i]} `;
      }
    }

    console.log(str);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${arrayOfNumbers[randomIndexOfArray]}`) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${arrayOfNumbers[randomIndexOfArray]}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default () => {
  console.log('What number is missing in the progression?');
  console.log(game(username));
};
