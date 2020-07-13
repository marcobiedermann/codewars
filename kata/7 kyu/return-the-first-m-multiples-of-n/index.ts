function multiples(m: number, n: number): number[] {
  return Array.from({ length: m }, (_, index) => (index + 1) * n);
}

export default multiples;
