function drawStairs(n: number): string {
  return Array.from({ length: n }, (_, index) => `${' '.repeat(index)}I`).join('\n');
}

export default drawStairs;
