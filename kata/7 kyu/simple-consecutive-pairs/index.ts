function pairs(ar: number[]): number {
  let total = 0;

  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      total += 1;
    }
  }

  return total;
}

export default pairs;
