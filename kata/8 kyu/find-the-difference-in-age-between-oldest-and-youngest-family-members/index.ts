function differenceInAges(ages: number[]): [number, number, number] {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  const diff = max - min;

  return [min, max, diff];
}

export default differenceInAges;
