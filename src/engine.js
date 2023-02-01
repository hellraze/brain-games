import readlineSync from 'readline-sync';

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(description);
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return null;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
  return null;
};
