import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const makeSequenceLength = () => {
  const minSequenceLength = 5;
  const maxSequenceLength = 10;
  const randomSequenceLength = Math.round(Math.random() * (maxSequenceLength - minSequenceLength)
   + minSequenceLength);
  return randomSequenceLength;
};

const getRandomStep = () => Math.floor(Math.random() * (5 - 1) + 5);

const makeSequence = (sequenceStep) => {
  const length = makeSequenceLength();
  let randomFirstNumber = Math.round(Math.random() * 100);
  const sequence = [];

  for (let i = 0; i < length; i += 1) {
    sequence.push(randomFirstNumber += sequenceStep);
  }

  const randomIndex = Math.floor(Math.random() * sequence.length);
  sequence[randomIndex] = '..';
  return sequence;
};

const getMissingNumber = (arr, step) => {
  const sequence = arr;
  let missingNumber;
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] === '..' && i === 0) {
      missingNumber = sequence[i + 1] - step;
    } else if (sequence[i] === '..' && i === sequence.length - 1) {
      missingNumber = sequence[i - 1] + step;
    } else if (sequence[i] === '..') {
      missingNumber = sequence[i - 1] + step;
    }
  }
  return missingNumber;
};

const progressionGame = () => {
  const name = getUserName();
  let counterCorrectAnswers = 0;
  console.log('What number is missing in the progression?');
  while (true) {
    if (counterCorrectAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const sequenceStep = getRandomStep();
    const sequence = makeSequence(sequenceStep);
    console.log(`Question: ${sequence}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(getMissingNumber(sequence, sequenceStep));
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

export default progressionGame;
