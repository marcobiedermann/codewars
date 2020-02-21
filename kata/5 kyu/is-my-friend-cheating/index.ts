function sumAll(n: number): number {
  return ((n + 1) * n) / 2;
}

function removeNb(n: number): number[][] {
  const sum = sumAll(n);
  const result = [];

  for (let b = n; b > 0; b -= 1) {
    const a = (sum - b) / (b + 1);

    if (a < n && Number.isInteger(a)) {
      result.push([a, b]);
    }
  }

  return result;
}

export default removeNb;
