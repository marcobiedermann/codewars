function fakeBin(x: string): string {
  return x
    .split('')
    .map((digit) => (digit < '5' ? '0' : '1'))
    .join('');
}

export default fakeBin;
