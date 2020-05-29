import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question =
  "what are the ten ingredients of an 'Easy Chocolate Cake'  (according to bbc good food)?";

const answers: answers = [
  ["caster sugar", "sugar"],
  ["butter"],
  ["eggs"],
  ["self raising flour"],
  ["cocoa powder", "cocoa"],
  ["baking powder", "baking soda"],
  ["milk"],
  ["icing sugar"],
  ["vanilla extract"],
  ["chocolate"],
];

tenable(question, answers);
