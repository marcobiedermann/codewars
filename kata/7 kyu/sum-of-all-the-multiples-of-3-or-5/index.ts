function sumMultiple(m: number, n: number): number {
  const x = Math.floor(n / m);

  return (m * x * (x + 1)) / 2;
}

function findSum(n: number): number {
  return sumMultiple(3, n) + sumMultiple(5, n) - sumMultiple(15, n);
}

export default findSum;
