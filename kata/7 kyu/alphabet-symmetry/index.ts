function solve(arr: string[]): number[] {
  return arr.map(
    (word) =>
      word
        .toLowerCase()
        .split('')
        .filter((character, index) => character.charCodeAt(0) - 97 === index).length,
  );
}

export default solve;
