type BooleanString = "Yes" | "No";

function boolToWord(bool: boolean): BooleanString {
  return bool ? "Yes" : "No";
}

export default boolToWord;
