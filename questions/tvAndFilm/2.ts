import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question =
  "Arnold Schwarzenegger acted in which ten movies in the 90s? (does not include appearances as himself)";

const correctAnswers: answers = [
  ["total recall"],
  ["kindergarten cop"],
  ["terminator 2 judgement day", "terminator 2"],
  ["last action hero"],
  ["true lies"],
  ["junior"],
  ["jingle all the way"],
  ["eraser"],
  ["batman and robin"],
  ["end of days"],
];

tenable(question, correctAnswers);
