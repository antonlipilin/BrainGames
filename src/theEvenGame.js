import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getRandomNumber = () => Math.round(Math.random() * 100);
const name = getUserName();

const getUserAnswer = () => {
  let counterCorrectAnswers = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (true) {
    if (counterCorrectAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const isAnswersAreIdentical = userAnswer === correctAnswer;

    if (!isAnswersAreIdentical) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      counterCorrectAnswers += 1;
    }
  }
};

export default getUserAnswer;
