function isEven(n: number): boolean {
  return n % 2 === 0;
}

function noOdds(values: number[]): number[] {
  return values.filter(isEven);
}

export default noOdds;
