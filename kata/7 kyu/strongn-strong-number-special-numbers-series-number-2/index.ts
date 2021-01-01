type Result = 'STRONG!!!!' | 'Not Strong !!';

function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function factorial(n: number): number {
  if (!n) {
    return 1;
  }

  return n * factorial(n - 1);
}

function strong(n: number): Result {
  const result = intToDigits(n).reduce(
    (accumulator, currentValue) => accumulator + factorial(currentValue),
    0,
  );

  if (result !== n) {
    return 'Not Strong !!';
  }

  return 'STRONG!!!!';
}

export default strong;
