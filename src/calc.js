import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import welcome from './welcome.js';

//  Get random arithmetic expression. Return string
const getRandomExpression = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  //  Get random arithmetic operators from array
  const operator = arithmeticOperators[Math.floor(Math.random() * arithmeticOperators.length)];
  console.log(`${number1} ${operator} ${number2}`);
  return `${number1} ${operator} ${number2}`;
};

const calcExpression = (expression) => {
  const expressionParts = expression.split(' ');
  const number1 = Number(expressionParts[0]);
  const number2 = Number(expressionParts[2]);
  const operator = expressionParts[1];

  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const userName = welcome();

console.log('What is the result of the expression?');

const calc = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const questionExpression = getRandomExpression();
    const correctAnswer = calcExpression(questionExpression);
    const userAnswer = getUserAnswer();
    if (userAnswer !== String(correctAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

console.log(calc(userName));
