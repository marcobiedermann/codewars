function sum(a: number, b: number) {
  return a + b;
}

function solve(arr: number[]): number {
  return [...new Set(arr)].reduce(sum);
}

export default solve;
