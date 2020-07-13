function subtract(a: number, b: number): number {
  return a - b;
}

function twoOldestAges(ages: number[]): number[] {
  return ages.sort(subtract).slice(-2);
}

export default twoOldestAges;
