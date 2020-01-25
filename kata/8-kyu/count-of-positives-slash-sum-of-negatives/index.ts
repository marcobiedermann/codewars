function countPositivesSumNegatives(input: number[]): number[] {
  if (!Array.isArray(input) || !input.length) {
    return [];
  }

  return input.reduce(
    (accumulator, currentValue) => {
      const [positive, negative] = accumulator;

      return currentValue <= 0 ? [positive, negative + currentValue] : [positive + 1, negative];
    },
    [0, 0],
  );
}

export default countPositivesSumNegatives;
