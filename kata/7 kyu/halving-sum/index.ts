function halvingSum(n: number): number {
  if (n === 1) {
    return n;
  }

  return n + halvingSum(Math.floor(n / 2));
}

export default halvingSum;
