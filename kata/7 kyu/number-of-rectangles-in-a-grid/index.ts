function numberOfRectangles(m: number, n: number): number {
  return (m * n * (n + 1) * (m + 1)) / 4;
}

export default numberOfRectangles;
