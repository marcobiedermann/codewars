function factorial(n: number): number {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
}

function amIWilson(p: number): boolean {
  return Number.isInteger((factorial(p - 1) + 1) / (p * p));
}

export default amIWilson;
