import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import getRandomNumber from './getRandomNumber.js';

const username = welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const questionNumber = getRandomNumber();
    let correctAnswer = '';
    if (isPrime(questionNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default () => {
  console.log(game(username));
};
