import { tenable } from "../../tenable";

const question =
  "what are the ten largest tech companies in the world (by valuation)?";

const answers = [
  ["microsoft"],
  ["apple"],
  ["amazon"],
  ["alphabet", "google"],
  ["alibaba"],
  ["tencent"],
  ["facebook"],
  ["samsung"],
  ["tsmc"],
  ["at&t", "att", "at and t"],
];

tenable(question, answers);
