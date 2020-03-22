function twoDecimalPlaces(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

export default twoDecimalPlaces;
