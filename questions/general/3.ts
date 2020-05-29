import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question = "who were the last ten prime ministers (includes current)?";

const answers: answers = [
  ["boris johnson", "johnson"],
  ["theresa may", "may"],
  ["david cameron", "cameron"],
  ["gordon brown", "brown"],
  ["tony blair", "blair"],
  ["john major", "major"],
  ["margaret thatcher", "maggie thatcher", "thatcher"],
  ["james callaghan", "callaghan"],
  ["harold wilson", "wilson"],
  ["edward heath", "heath"],
];

tenable(question, answers);
