function solve(s: string): number {
  return Math.max(
    ...s.split(/[aeiou]/g).map((slice) =>
      slice
        .split('')
        .map((character) => character.charCodeAt(0) - 96)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    ),
  );
}

export default solve;
