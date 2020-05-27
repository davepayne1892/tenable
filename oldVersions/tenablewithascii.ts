import * as readline from "readline";
import { dramaticWait, wait } from "../utils";
import { answers } from "../types/answers";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function tenable(
  question: string,
  answers: answers,
  previousAnswers?: string[]
) {
  rl.question(`${question} (or stick with 'stick')\n`, async (response) => {
    if (response === "stick") {
      console.log(`You scored ${previousAnswers.length} points.`);
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
          if (response === answers[answerIndex][aliasIndex]) {
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
        tenable(question, answers, previousAnswers);
      } else {
        // no match found in entire answers list. Quit game
        await wait(1, "s");
        console.log(`Sorry! "${response}" was an incorrect answer.`);
        console.log(`You scored 0 points.`);
        rl.close();
      }
    }
  });
}
