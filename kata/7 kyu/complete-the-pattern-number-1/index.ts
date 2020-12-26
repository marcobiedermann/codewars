function pattern(n: number): string {
  return Array.from(
    {
      length: n,
    },
    (_, index) => `${index + 1}`.repeat(index + 1),
  ).join('\n');
}

export default pattern;
