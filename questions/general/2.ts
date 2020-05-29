import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question = "what are the ten most popular takeaways in the UK?";

const answers: answers = [
  ["chinese"],
  ["indian", "curry"],
  ["fish and chips", "fish n chips"],
  ["pizza"],
  ["burger"],
  ["chicken", "fried chicken", "kfc", "nandos"],
  ["kebab"],
  ["sandwiches", "sandwich"],
  ["thai"],
  ["sausages", "sausage"],
];

tenable(question, answers);
