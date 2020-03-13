function multiply(a: number, b: number): number {
  return a * b;
}

function product(numbers: number[]): number {
  return numbers.reduce(multiply);
}

function findDifference(a: [number, number, number], b: [number, number, number]): number {
  const volumeA = product(a);
  const volumeB = product(b);

  return Math.abs(volumeA - volumeB);
}

export default findDifference;
