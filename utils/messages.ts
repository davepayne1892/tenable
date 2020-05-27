import { wait } from ".";
import { printChicken, printTenable } from "../messages/art";
import { answers } from "../types/answers";

export async function printWelcome() {
  console.log(`welcome to...`);
  printTenable();
  await wait(5);
  console.log(`Your question is...`);
  await wait(1);
}

export async function score(answers: answers) {
  console.log(`The correct answers were...`);
  await wait(1);
  for (let index = 0; index < answers.length; index++) {
    await wait(1);
    console.log(`${index + 1}. ${answers[index]}`);
  }
}

export async function stickMessage(
  previousAnswers: string[],
  answers: answers
) {
  console.clear();
  if (previousAnswers.length <= 5) {
    printChicken(previousAnswers.length);
  }
  console.log(`You scored ${previousAnswers.length} points.`);
  await wait(2);
  await score(answers);
}
