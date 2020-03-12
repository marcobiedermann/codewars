function powersOfTwo(n: number): number[] {
  return Array.from({ length: n + 1 }, (_, index) => 2 ** index);
}

export default powersOfTwo;
