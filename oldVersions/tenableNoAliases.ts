import * as readline from "readline";
import { dramaticWait, wait } from "../utils";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function tenable(
  question: string,
  answers: string[],
  previousAnswers?: string[]
) {
  rl.question(`${question} (or stick with 'stick')\n`, async (response) => {
    if (response === "stick") {
      console.log(`You scored ${previousAnswers.length} points.`);
      rl.close();
    } else {
      let found: boolean = false;
      for (let index = 0; index < answers.length; index++) {
        await dramaticWait(index, found);

        if (response === answers[index]) {
          // answer found, record answer and ask again
          console.log(`${index + 1}. ${response} ✔✔✔`);
          previousAnswers.push(response);
          found = true;
        } else if (response !== answers[index]) {
          // response not in the answers array
          if (index <= answers.length) {
            // no match found, print unsuccessful message
            if (previousAnswers.includes(answers[index])) {
              // answer was previously found, print answer
              console.log(`${index + 1}. ${answers[index]}`);
            } else {
              // answer was not previously found, print cross
              console.log(`${index + 1}. ✘`);
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
