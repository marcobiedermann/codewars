function positiveSum(arr: number[]): number {
  return arr.reduce(
    (accumulator, currentValue) => (currentValue > 0 ? accumulator + currentValue : accumulator),
    0,
  );
}

export default positiveSum;
