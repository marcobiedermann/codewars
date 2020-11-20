function reverseNumber(n: number): number {
  let x = Math.abs(n);
  let result = 0;

  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return Math.sign(n) * result;
}

export default reverseNumber;
