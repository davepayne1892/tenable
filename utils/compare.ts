export function compare(string1: string, string2: string): boolean {
  string1 = formatString(string1);
  string2 = formatString(string2);

  let isMatch: boolean;
  string1 === string2 ? (isMatch = true) : (isMatch = false);
  return isMatch;
}

function formatString(string: string): string {
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  string = string.replace(/\s{2,}/g, " ");
  string = string.toLowerCase();
  return string;
}
