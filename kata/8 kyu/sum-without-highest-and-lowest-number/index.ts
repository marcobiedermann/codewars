function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function sumArray(array: number[] | null = []): number {
  if (!array) {
    return 0;
  }

  return sum(array.sort(subtract).slice(1, -1));
}

export default sumArray;
