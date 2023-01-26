import { welcome, game } from './engine.js';
import { getRandomNumber } from './lib.js';

const username = welcome();
const condition = 'What number is missing in the progression?';

const generateQuestion = () => {
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

  return question;
};

const isCorrect = (question) => {
  const questionParts = question.split(' ');
  let correct = 0;

  questionParts.pop();

  const index = questionParts.indexOf('..');

  for (let i = 0; i < questionParts.length; i += 1) {
    if (i !== index) {
      questionParts[i] = Number(questionParts[i]);
    }
  }

  if ((index === 0) || (index === 1)) {
    correct = questionParts[index + 1] - (questionParts[index + 2] - questionParts[index + 1]);
  } else {
    correct = questionParts[index - 1] + (questionParts[index - 1] - questionParts[index - 2]);
  }

  return String(correct);
};

export default () => game(username, condition, generateQuestion, isCorrect);
