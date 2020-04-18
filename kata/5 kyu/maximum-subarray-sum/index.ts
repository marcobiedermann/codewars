function maxSequence(arr: number[]): number {
  const { length } = arr;
  let max = 0;
  let current = 0;

  for (let i = 0; i < length; i += 1) {
    current = Math.max(0, current + arr[i]);
    max = Math.max(max, current);
  }

  return max;
}

export default maxSequence;
