function SeriesSum(n: number): string {
  const sum = Array.from({ length: n }).reduce(
    (accumulator: number, _currentValue, index) => accumulator + 1 / (3 * index + 1),
    0,
  );

  return sum.toFixed(2);
}

export default SeriesSum;
