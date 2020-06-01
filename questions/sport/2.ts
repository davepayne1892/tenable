import { tenable } from "../../tenable";
import { answers } from "../../types/answers";

const question =
  "who are the ten most recent winners of wimbledon (singles, mens and womens... one answer is two people as they both last won it the same year, placing them at 10th.)?";

const answers: answers = [
  ["Novak Djokovic", "djokovic"],
  ["Roger Federer", "federer"],
  ["andy murray", "murray"],
  [
    "Rafa Nadal / Venus Williams",
    "Rafael Nadal",
    "rafa nadal",
    "nadal",
    "Venus Williams",
    "venus",
  ],
  ["Simona Halep", "halep"],
  ["Angelique Kerber", "kerber"],
  ["Garbiñe Muguruza", "Garbine Muguruza", "muguruza"],
  ["Serena Williams", "serena"],
  ["Petra Kvitová", "Petra Kvitova", "kvitova"],
  ["Marion Bartoli", "bartoli"],
];

tenable(question, answers);
