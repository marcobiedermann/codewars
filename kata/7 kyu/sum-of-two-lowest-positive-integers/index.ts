function subtract(a: number, b: number): number {
  return a - b;
}

function sumTwoSmallestNumbers(numbers: number[]): number {
  const [a, b] = numbers.sort(subtract);

  return a + b;
}

export default sumTwoSmallestNumbers;
