function sumTriangularNumbers(n: number): number {
  if (n < 0) {
    return 0;
  }

  return (n * (n + 1) * (n + 2)) / 6;
}

export default sumTriangularNumbers;
