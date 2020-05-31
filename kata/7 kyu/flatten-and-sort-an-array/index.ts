function flat<T>(arr: T[][]): T[] {
  return arr.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []);
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sortNumbers(arr: number[]): number[] {
  return arr.sort(subtract);
}

function flattenAndSort(array: number[][]): number[] {
  return sortNumbers(flat(array));
}

export default flattenAndSort;
