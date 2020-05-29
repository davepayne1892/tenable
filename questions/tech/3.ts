import { tenable } from "../../tenable";

const question = "what are the ten most popular web browsers?";

const answers = [
  ["chrome", "google chrome"],
  ["firefox"],
  ["safari"],
  ["Edge", "internet explorer", "ie"],
  ["opera"],
  ["vivaldi"],
  ["avast secure browser", "avast"],
  ["tor browser", "tor"],
  ["maxthon"],
  ["brave browser", "brave"],
];

tenable(question, answers);
