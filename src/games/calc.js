import { getRandomNumber } from '../lib.js';
import game from '../engine.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  result.push(`${number1} ${operator} ${number2}`);

  const correctAnswer = String(calculate(number1, number2, operator));

  result.push(correctAnswer);

  return result;
};

export default () => game(description, generateRound);
