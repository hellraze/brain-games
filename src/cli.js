import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');

  console.log(`Hello, ${name}!`);
};
