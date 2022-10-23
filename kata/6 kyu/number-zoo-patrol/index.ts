function add(a: number, b: number) {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function consecutiveSum(n: number): number {
  return (n * (n + 1)) / 2;
}

function findNumber(array: number[]): number {
  const max = array.length + 1;

  return consecutiveSum(max) - sum(array);
}

export default findNumber;
