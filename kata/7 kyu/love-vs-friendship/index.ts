function wordsToMarks(string: string): number {
  let sum = 0;

  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i) - 96;
  }

  return sum;
}

export default wordsToMarks;
