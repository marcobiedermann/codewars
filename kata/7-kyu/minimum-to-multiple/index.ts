function minimum(a: number, x: number): number | undefined {
  for (let i = 0; i < x; i += 1) {
    if ((a - i) % x === 0 || (a + i) % x === 0) {
      return i;
    }
  }

  return undefined;
}

export default minimum;
