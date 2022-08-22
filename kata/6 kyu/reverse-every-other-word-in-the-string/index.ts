function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

function reverse(str: string): string {
  return str
    .trim()
    .split(' ')
    .map((word, index) => {
      if (isOdd(index)) {
        return word.split('').reverse().join('');
      }

      return word;
    })
    .join(' ');
}

export default reverse;
