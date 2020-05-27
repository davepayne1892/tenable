import * as readline from "readline";
import { compare, dramaticWait, printWelcome, wait } from "./utils";
import { answers } from "./types/answers";
import { printWinner } from "./messages/art";
import { stickMessage } from "./utils/messages";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function tenable(question: string, answers: answers) {
  let previousAnswers = [];
  console.clear();
  await printWelcome();
  await game(question, answers, true, previousAnswers);
}

export async function game(
  question: string,
  answers: answers,
  hasLife: boolean,
  previousAnswers?: string[]
) {
  rl.question(`${question}\n (or stick with 'stick')\n`, async (response) => {
    if (compare(response, "stick")) {
      await stickMessage(previousAnswers, answers);

      rl.close();
    } else {
      let found: boolean = false;
      for (let answerIndex = 0; answerIndex < answers.length; answerIndex++) {
        await dramaticWait(answerIndex, found);
        let correct: boolean = false;
        for (
          let aliasIndex = 0;
          aliasIndex < answers[answerIndex].length;
          aliasIndex++
        ) {
          if (compare(response, answers[answerIndex][aliasIndex])) {
            correct = true;
          }
        }

        if (correct) {
          // answer found, record answer and ask again
          console.log(`${answerIndex + 1}. ${answers[answerIndex][0]} ✔✔✔`);
          previousAnswers.push(answers[answerIndex][0]);
          found = true;
        } else if (!correct) {
          // response not in the answers array
          if (answerIndex <= answers.length) {
            // no match found, print unsuccessful message
            if (previousAnswers.includes(answers[answerIndex][0])) {
              // answer was previously found, print answer
              console.log(`${answerIndex + 1}. ${answers[answerIndex]}`);
            } else {
              // answer was not previously found, print cross
              console.log(`${answerIndex + 1}. ✘`);
            }
          }
        }
      }
      if (found) {
        if (previousAnswers.length !== 10) {
          game(question, answers, hasLife, previousAnswers);
        } else {
          await dramaticWait(3);
          printWinner();
          rl.close();
        }
      } else {
        // no match found in entire answers list. Quit game
        if (hasLife) {
          hasLife = false;
          await wait(1, "s");
          console.log(`Sorry! "${response}" was an incorrect answer.`);
          console.log(`You lost your life! ಥ_ಥ`);
          await wait(2);
          game(question, answers, hasLife, previousAnswers);
        } else {
          await wait(1);
          console.log(`Sorry! "${response}" was an incorrect answer.`);
          console.log(`You scored 0 points.`);
          rl.close();
        }
      }
    }
  });
}
