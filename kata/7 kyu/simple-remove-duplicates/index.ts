function solve(arr: number[]): number[] {
  return arr.filter((value, index) => arr.lastIndexOf(value) === index);
}

export default solve;
