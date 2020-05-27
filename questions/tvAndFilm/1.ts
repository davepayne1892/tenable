import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question = "what are the ten highest grossing films of all time?";

const correctAnswers: answers = [
  ["avengers endgame", "endgame"],
  ["avatar"],
  ["titanic"],
  [
    "star wars the force awakens",
    "the force awakens",
    "star wars ep7",
    "star wars episode 7",
  ],
  ["avengers infinity war", "infinity war"],
  ["jurassic world"],
  ["avengers", "marvels avengers", "avengers assemble"],
  ["furious 7", "fast and furious 7"],
  ["avengers age of ultron", "age of ultron"],
  ["black panther"],
];

tenable(question, correctAnswers);
