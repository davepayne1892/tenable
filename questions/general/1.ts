import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question =
  "what are the ten ingredients of a classic victoria sponge (according to bbc good food... there are only 9 really, the tenth is a bonus that makes cakes taste nicer)?";

const answers: answers = [
  ["caster sugar"],
  ["butter"],
  ["eggs"],
  ["self raising flour"],
  ["baking powder"],
  ["milk"],
  ["icing sugar"],
  ["vanilla extract"],
  ["jam"],
  ["love"],
];

tenable(question, answers);
