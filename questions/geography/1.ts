import { tenable } from "../../tenable";

const question = "what are the ten largest cities in Britain (by population)?";

const answers = [
  ["london"],
  ["birmingham"],
  ["manchester"],
  ["glasgow"],
  ["newcastle"],
  ["sheffield"],
  ["liverpool"],
  ["leeds"],
  ["bristol"],
  ["belfast"],
];

tenable(question, answers);
