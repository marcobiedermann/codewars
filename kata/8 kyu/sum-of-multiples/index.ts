function sumMul(n: number, m: number): number | 'INVALID' {
  if (n >= m) {
    return 'INVALID';
  }

  return Math.floor(m / n) * (Math.floor(m / n) + 1) * (n / 2);
}

export default sumMul;
