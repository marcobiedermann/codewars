function multiplyAll(numbers: number[]): (multiplier: number) => number[] {
  return (multiplier: number): number[] => numbers.map((number) => number * multiplier);
}

export default multiplyAll;
