function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function balancedNum(number: number): string {
  const digits = intToDigits(number);

  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 0; i < digits.length / 2 - 1; i += 1) {
    sumLeft += digits[i];
    sumRight += digits[digits.length - 1 - i];
  }

  return sumLeft === sumRight ? 'Balanced' : 'Not Balanced';
}

export default balancedNum;
