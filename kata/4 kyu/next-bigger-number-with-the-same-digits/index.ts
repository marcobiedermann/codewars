function nextBigger(n: number): number {
  const biggest = Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join(''),
  );

  for (let i = n + 1; i <= biggest; i += 1) {
    if (
      biggest ===
      Number(
        i
          .toString()
          .split('')
          .sort((a, b) => b.localeCompare(a))
          .join(''),
      )
    )
      return i;
  }

  return -1;
}

export default nextBigger;
