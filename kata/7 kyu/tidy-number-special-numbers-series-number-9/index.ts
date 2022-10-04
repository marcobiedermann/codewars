function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function tidyNumber(n: number): boolean {
  const digits = intToDigits(n);

  for (let i = 0; i < digits.length - 1; i += 1) {
    const current = digits[i];
    const next = digits[i + 1];

    if (next < current) {
      return false;
    }
  }

  return true;
}

export default tidyNumber;
