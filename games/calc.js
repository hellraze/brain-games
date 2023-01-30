import getRandomNumber from '../src/lib.js';
import game from '../src/engine.js';

const condition = 'What is the result of the expression?';

const generateInfo = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  result.push(`${number1} ${operator} ${number2}`);
  switch (operator) {
    case '+':
      result.push(String(number1 + number2));
      break;
    case '-':
      result.push(String(number1 - number2));
      break;
    case '*':
      result.push(String(number1 * number2));
      break;
    default:
      break;
  }
  return result;
};

export default () => game(condition, generateInfo);
