function isDivideBy(number: number, a: number, b: number): boolean {
  return [a, b].every(n => number % n === 0);
}

export default isDivideBy;
