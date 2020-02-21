function addLetters(...letters: string[]): string {
  const sum = letters.reduce(
    (accumulator, currentValue) => accumulator + currentValue.charCodeAt(0) - 96,
    0,
  );

  return String.fromCharCode(((sum + 25) % 26) + 97);
}

export default addLetters;
