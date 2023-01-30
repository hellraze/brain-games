import getRandomNumber from './lib.js';
import { welcome, game } from './engine.js';

const username = welcome();
const condition = 'What is the result of the expression?';

const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  return `${number1} ${operator} ${number2}`;
};

const isCorrect = (question) => {
  const questionParts = question.split(' ');
  const number1 = Number(questionParts[0]);
  const number2 = Number(questionParts[2]);
  const operator = questionParts[1];

  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      break;
  }
  return null;
};

export default () => game(username, condition, generateQuestion, isCorrect);
