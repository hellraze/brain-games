import readlineSync from 'readline-sync';

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const gameInfo = generateRound();
    const question = gameInfo[0];
    const correctAnswer = gameInfo[1];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${username}!`);
  return null;
};
