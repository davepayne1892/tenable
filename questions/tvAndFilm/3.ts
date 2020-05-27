import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question: string =
  "What are the first ten Marvel Cinematic Universe movies by release date?";

const correctAnswers: answers = [
  ["iron man"],
  ["the incredible hulk"],
  ["iron man 2"],
  ["thor"],
  ["captain america the first avenger"],
  ["the avengers"],
  ["iron man 3"],
  ["thor the dark world"],
  ["captain america winter soldier"],
  ["guardians of the galaxy"],
];

tenable(question, correctAnswers);
