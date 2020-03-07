function minValue(values: number[]): number {
  return Number([...new Set(values)].sort().join(''));
}

export default minValue;
