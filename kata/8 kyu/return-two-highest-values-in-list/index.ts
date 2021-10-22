function twoHighest(arr: number[]): number[] {
  const sorted = [...new Set(arr)].sort((a, b) => b - a);

  return sorted.slice(0, 2);
}

export default twoHighest;
