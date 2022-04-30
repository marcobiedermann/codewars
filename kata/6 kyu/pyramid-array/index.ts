function pyramid(n: number): number[][] {
  return Array.from(
    {
      length: n,
    },
    (_, index) => Array(index + 1).fill(1),
  );
}

export default pyramid;
