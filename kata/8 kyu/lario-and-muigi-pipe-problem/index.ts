function pipeFix(numbers: number[]): number[] {
  const [first] = numbers;
  const last = numbers[numbers.length - 1];
  const diff = last - first;

  return Array.from({ length: diff + 1 }, (_, index) => index + first);
}

export default pipeFix;
