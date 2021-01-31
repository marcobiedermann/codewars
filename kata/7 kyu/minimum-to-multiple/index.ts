function minimum(a: number, x: number): number {
  const result = a % x;

  return Math.min(x - result, result);
}

export default minimum;
