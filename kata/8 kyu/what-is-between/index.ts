function between(a: number, b: number): number[] {
  return Array.from(
    {
      length: b - a + 1,
    },
    (_, index) => a + index,
  );
}

export default between;
