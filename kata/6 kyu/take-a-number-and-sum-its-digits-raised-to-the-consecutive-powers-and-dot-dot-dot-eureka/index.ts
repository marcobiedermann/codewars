function intToDigits(int: number): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function sumDigPow(a: number, b: number): number[] {
  const result: number[] = [];

  for (let i = a; i <= b; i += 1) {
    const digits = intToDigits(i);

    const sum = digits.reduce(
      (accumulator, currentValue, index) => accumulator + currentValue ** (index + 1),
      0,
    );

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}

export default sumDigPow;
