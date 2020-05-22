function palindromeChainLength(n: number): number {
  const x = parseInt(`${n}`.split('').reverse().join(''), 10);

  if (n !== x) {
    return 1 + palindromeChainLength(n + x);
  }

  return 0;
}

export default palindromeChainLength;
