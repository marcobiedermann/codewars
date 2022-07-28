function nthFibo(n: number): number {
  if (n < 2) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
}

export default nthFibo;
