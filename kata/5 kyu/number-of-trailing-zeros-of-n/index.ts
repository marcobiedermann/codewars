function zeros(n: number): number {
  let count = 0;

  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

export default zeros;
