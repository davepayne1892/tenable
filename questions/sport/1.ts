import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question = "what is the current premier league top ten?";

const answers: answers = [
  ["liverpool", "liverpool fc"],
  ["manchester city", "man city"],
  ["leicester"],
  ["chelsea"],
  ["manchester united", "man united", "man utd"],
  ["wolverhampton wanderers", "wolves", "wolverhampton"],
  ["sheffield united", "sheff united", "sheff utd"],
  ["tottenham", "spurs", "tottenham hotspurs"],
  ["arsenal"],
  ["burnley"],
];

tenable(question, answers);
