function countBy(x: number, n: number): number[] {
  return Array.from({ length: n }, (_, index) => (index + 1) * x);
}

export default countBy;
