function pascalsTriangle(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i += 1) {
    const row = result.length - i;

    for (let j = 0; j < i + 1; j += 1) {
      if (j === 0 || j === i) {
        result.push(1);
      } else {
        result.push(result[row + j] + result[row + j - 1]);
      }
    }
  }

  return result;
}

export default pascalsTriangle;
