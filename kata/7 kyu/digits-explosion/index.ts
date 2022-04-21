function explode(s: string): string {
  return s
    .split('')
    .map((digit) => digit.repeat(parseInt(digit, 10)))
    .join('');
}

export default explode;
