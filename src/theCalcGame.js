import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const calculator = () => {
  const name = getUserName();
  let correctAnswersCounter = 0;
  console.log('What is the result of the expression?');

  while (true) {
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const operators = ['+', '-', '*'];
    const firstOperand = Math.round(Math.random() * 30);
    const secondOperand = Math.round(Math.random() * 30);
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    console.log(`Question: ${firstOperand} ${randomOperator} ${secondOperand}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;

    if (randomOperator === '*') {
      correctAnswer = firstOperand * secondOperand;
    } else if (randomOperator === '-') {
      correctAnswer = firstOperand - secondOperand;
    } else {
      correctAnswer = firstOperand + secondOperand;
    }
    correctAnswer = String(correctAnswer); // correct to string
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

export default calculator;
