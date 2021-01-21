import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getGreatestDivisor = (a, b) => {
  if (b === 0) return a;
  return getGreatestDivisor(b, a % b);
};

const gcdGame = () => {
  const name = getUserName();
  let correctAnswersCounter = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (true) {
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    const correctAnswer = String(getGreatestDivisor(firstNumber, secondNumber));
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswersAreIdentical = correctAnswer === userAnswer;

    if (!isAnswersAreIdentical) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      correctAnswersCounter += 1;
    }
  }
};

export default gcdGame;
