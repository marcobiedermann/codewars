function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(Math.log2(n));
}

export default isPowerOfTwo;
