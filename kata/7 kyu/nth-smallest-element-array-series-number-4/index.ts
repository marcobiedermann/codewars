function subtract(a: number, b: number): number {
  return a - b;
}

function nthSmallest(arr: number[], pos: number): number {
  return arr.sort(subtract)[pos - 1];
}

export default nthSmallest;
