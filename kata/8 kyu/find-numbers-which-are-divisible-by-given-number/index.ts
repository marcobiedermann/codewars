function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter(number => !(number % divisor));
}

export default divisibleBy;
