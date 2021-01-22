import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const name = getUserName();
  let correctAnswersCounter = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (true) {
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswersAreIdentical = userAnswer === correctAnswer;

    if (!isAnswersAreIdentical) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${name}!`);
      break;
    } else {
      correctAnswersCounter += 1;
      console.log('Correct!');
    }
  }
};

export default primeGame;
