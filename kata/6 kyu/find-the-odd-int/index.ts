function findOdd(arr: number[]): number | undefined {
  return arr.find((item) => arr.filter((element) => element === item).length % 2);
}

export default findOdd;
