function noBoringZeros(n: number): number {
  if (n === 0 || n % 10) {
    return n;
  }

  return noBoringZeros(n / 10);
}

export default noBoringZeros;
