function wordValue(a: string[]): number[] {
  return a.map(
    (word, index) =>
      word
        .split('')
        .reduce((accumulator, currentValue) => accumulator + (currentValue.charCodeAt(0) % 32), 0) *
      (index + 1),
  );
}

export default wordValue;
