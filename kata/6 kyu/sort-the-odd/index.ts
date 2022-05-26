function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sortArray(array: number[]): (number | undefined)[] {
  const odd = array.filter(isOdd).sort(subtract);

  return array.map((n) => (isOdd(n) ? odd.shift() : n));
}

export default sortArray;
