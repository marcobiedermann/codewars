function stray(numbers: number[]): number {
  const sortedNumbers = numbers.sort();
  const [first, second] = sortedNumbers;

  return first === second ? sortedNumbers[numbers.length - 1] : first;
}

export default stray;
