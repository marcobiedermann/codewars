function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function multiply(a: number, b: number) {
  return a * b;
}

function product(numbers: number[]): number {
  return numbers.reduce(multiply, 1);
}

function persistence(num: number, count = 0): number {
  if (num < 10) {
    return count;
  }

  return persistence(product(intToDigits(num)), count + 1);
}

export default persistence;
