import { tenable } from "../../tenable";

const question = "what are first ten American states alphabetically?";

const answers = [
  ["alabama"],
  ["alaska"],
  ["arizona"],
  ["arkansas"],
  ["california"],
  ["colorado"],
  ["connecticut", "conneticut"],
  ["delaware"],
  ["florida"],
  ["georgia"],
];

tenable(question, answers);
