import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import getRandomNumber from './getRandomNumber.js';

const findCommonDivisor = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let gcd = min;

  while (max % gcd > 0) {
    gcd = max % gcd;
    max = min;
    min = gcd;
  }
  return gcd;
};

const game = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();

    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const correctAnswer = `${findCommonDivisor(firstNumber, secondNumber)}`;
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
  };

  return `Congratulations, ${name}`;
};

export default () => {
  const username = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(game(username));
};
