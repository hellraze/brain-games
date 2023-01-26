import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const game = (username, condition, questionFunc, isCorrect) => {
  console.log(condition);
  let isWin = true;
  for (let i = 0; i < 3; i +=1) {

    const question = questionFunc();
    const correctAnswer = isCorrect(question);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      isWin = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      break;
    }
  }

  if (isWin) {
    console.log(`Congratulations, ${username}!`);
  }
  
};
