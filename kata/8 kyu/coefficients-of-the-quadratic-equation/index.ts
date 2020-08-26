function quadratic(x1: number, x2: number): [number, number, number] {
  const a = 1;
  const b = -(x1 + x2);
  const c = x1 * x2;

  return [a, b, c];
}

export default quadratic;
