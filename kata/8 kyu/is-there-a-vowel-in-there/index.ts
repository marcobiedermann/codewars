const map = new Map<number, string>([
  [97, 'a'],
  [101, 'e'],
  [105, 'i'],
  [111, 'o'],
  [117, 'u'],
]);

function isVow(a: number[]): (number | string)[] {
  return a.map((characterCode) => map.get(characterCode) || characterCode);
}

export default isVow;
