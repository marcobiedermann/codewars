function sumOfN(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= Math.abs(n); i += 1) {
    const previous = result[i - 1] || 0;
    const sign = n < 0 ? -1 : 1;
    const next = previous + i * sign;

    result.push(next);
  }

  return result;
}

export default sumOfN;
