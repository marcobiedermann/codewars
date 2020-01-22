function nbDig(n: number, d: number): number {
  return Array.from({ length: n + 1 }, (_, index) => index ** 2)
    .join('')
    .split('')
    .map(Number)
    .filter(digit => digit === d).length;
}

export default nbDig;
