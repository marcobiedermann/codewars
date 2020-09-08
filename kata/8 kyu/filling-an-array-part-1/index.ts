function arr(n = 0): number[] {
  return Array.from({ length: n }, (_, index) => index);
}

export default arr;
