function digPow(n: number, p: number): number {
  const digits = n
    .toString()
    .split('')
    .map(Number);

  const sum = digits.reduce(
    (accumulator, currentValue, index) => accumulator + currentValue ** (index + p),
    0,
  );

  return sum % n ? -1 : sum / n;
}

export default digPow;
