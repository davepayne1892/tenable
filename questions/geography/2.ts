import { tenable } from "../../tenable";

const question = "what are the ten closest capital cities to London?";

const answers = [
  ["brussels"],
  ["paris"],
  ["amsterdam"],
  ["dublin"],
  ["luxembourg"],
  ["bern"],
  ["vaduz"],
  ["berlin"],
  ["copenhagen"],
  ["andorra la vella", "andorra"],
];

tenable(question, answers);
