function maxNumber(n: number): number {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join(''),
    10,
  );
}

export default maxNumber;
