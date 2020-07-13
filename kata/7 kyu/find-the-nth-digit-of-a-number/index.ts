function findDigit(num: number, nth: number): number {
  if (nth < 1) {
    return -1;
  }

  let x = Math.abs(num);

  for (let i = 1; i < nth; i += 1) {
    x = Math.floor(x / 10);
  }

  return x % 10;
}

export default findDigit;
