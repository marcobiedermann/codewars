function sumOfDifferences(arr: number[]): number {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const diff = max - min;

  return arr.length > 1 ? diff : 0;
}

export default sumOfDifferences;
