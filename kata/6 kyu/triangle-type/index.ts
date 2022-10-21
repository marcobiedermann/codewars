function triangleType(a: number, b: number, c: number): 0 | 1 | 2 | 3 {
  const max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) {
    return 0;
  }

  if (a ** 2 + b ** 2 + c ** 2 === 2 * max ** 2) {
    return 2;
  }

  if (a ** 2 + b ** 2 + c ** 2 < 2 * max ** 2) {
    return 3;
  }

  return 1;
}

export default triangleType;
