function squareSum(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 2,
    0
  );
}

export default squareSum;
