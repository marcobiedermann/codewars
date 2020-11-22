function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function encode(str: string, n: number): number[] {
  const letters = str.split('');
  const digits = intToDigits(n);

  return letters.map(
    (letter, index) => (letter.charCodeAt(0) % 32) + digits[index % digits.length],
  );
}

export default encode;
