import { welcome, game } from './engine.js';
import { getRandomNumber } from './lib.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => String(getRandomNumber(1, 10));

const isCorrect = (question) => (isEven(Number(question)) ? 'yes' : 'no');
const username = welcome();

export default () => game(username, condition, generateQuestion, isCorrect);
