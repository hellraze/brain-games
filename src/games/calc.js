import { getRandomNumber } from '../src/lib.js';
import game from '../src/engine.js';

const condition = 'What is the result of the expression?';

const getAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateInfo = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  result.push(`${number1} ${operator} ${number2}`);

  const correctAnswer = getAnswer(number1, number2, operator);

  result.push(correctAnswer);

  return result;
};

export default () => game(condition, generateInfo);
