function drawStairs(n: number): string {
  const stair = [];

  for (let i = 0; i < n; i += 1) {
    stair[i] = `${' '.repeat(i)}I`;
  }

  return stair.join('\n');
}

export default drawStairs;
