import { tenable } from "../../tenable";

const question =
  "what are the ten most subscribed to youtube channels (includes youtube themed channels)?";

const answers = [
  ["t series", "t-series"],
  ["youtube movies"],
  ["music"],
  ["pewdiepie"],
  ["gaming"],
  ["cocomelon", "cocomelon-nusery rhymes"],
  ["sports", "sport"],
  ["set india", "set"],
  [
    "5-minute crafts",
    "5 minute crafts",
    "5 min crafts",
    "five min crafts",
    "five minute crafts",
  ],
  ["wwe"],
];

tenable(question, answers);
