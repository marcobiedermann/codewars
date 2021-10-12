function digitize(n: number): number[] {
  if (n < 10) {
    return [n];
  }

  return [...digitize(Math.floor(n / 10)), n % 10];
}

export default digitize;
