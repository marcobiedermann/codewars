function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function narcissistic(value: number): boolean {
  const digits = intToDigits(value);
  const { length } = digits;

  return (
    value === digits.reduce((accumulator, currentValue) => accumulator + currentValue ** length, 0)
  );
}

export default narcissistic;
