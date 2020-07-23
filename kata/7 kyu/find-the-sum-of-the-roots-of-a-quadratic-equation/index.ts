function round(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function roots(a: number, b: number, c: number): number | null {
  const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  const sum = x1 + x2;

  if (Number.isNaN(sum)) {
    return null;
  }

  return round(sum);
}

export default roots;
