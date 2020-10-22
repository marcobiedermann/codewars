function repeats(arr: number[]): number {
  const set = new Set<number>();

  let total = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];

    if (!set.has(current)) {
      set.add(current);

      total += current;
    } else {
      total -= current;
    }
  }

  return total;
}

export default repeats;
