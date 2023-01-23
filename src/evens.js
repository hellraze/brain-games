//  Welcome user and save username
//  then give a question and save answer
//  if answer is correct congrats user
import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import getRandomNumber from './getRandomNumber.js';

// Checks if a number is even
const isEven = (number) => number % 2 === 0;

const isUserAnswerValid = (answer) => {
  if ((answer === 'yes') || (answer === 'no')) {
    return true;
  }
  return false;
};

//  Generates a random numbers,
//  asks a questions to the user isEven,
//  returns the answer
const getUserAnswer = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    //  Get random number for the question and show it
    const questionNumber = getRandomNumber();
    console.log(`Question: ${questionNumber}`);
    // Get user's answer
    const userAnswer = readlineSync.question('Your answer: ');
    //  Get correct answer
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
    const isUserAnswerIsValid = isUserAnswerValid(userAnswer);
    //  Check if user's answer not valid or correct, return false
    if ((!isUserAnswerIsValid) || (userAnswer !== correctAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    }
  }
  return 'Correct!';
};

export default () => {
  const userName = welcome();

  const userAnswer = getUserAnswer();
  console.log(userAnswer);
  if (userAnswer === 'Correct!') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
