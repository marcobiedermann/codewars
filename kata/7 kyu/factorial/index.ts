function factorial(n: number): number {
  if (n < 0 || n > 12) {
    throw new RangeError();
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

export default factorial;
