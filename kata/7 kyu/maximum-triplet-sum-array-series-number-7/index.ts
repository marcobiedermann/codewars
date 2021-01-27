function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function maxTriSum(numbers: number[]): number {
  return sum(unique(numbers).sort(subtract).slice(-3));
}

export default maxTriSum;
