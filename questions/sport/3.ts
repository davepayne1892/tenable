import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question =
  "which countries won the most medals as the london 2012 olympics?";

const answers: answers = [
  ["USA", "america", "united states", "united states of america", "us"],
  ["china"],
  ["great britain", "britain", "team gb", "gb", "gbr"],
  ["russia"],
  ["south korea"],
  ["germany"],
  ["france"],
  ["australia"],
  ["italy"],
  ["hungary"],
];

tenable(question, answers);
