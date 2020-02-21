function add(a: number, b: number): number {
  return a + b;
}

function arrayPlusArray(arr1: number[], arr2: number[]): number {
  return [...arr1, ...arr2].reduce(add, 0);
}

export default arrayPlusArray;
