function findUniq(arr: number[]): number | undefined {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];

    if (map.get(current) === 1) {
      return current;
    }
  }

  return undefined;
}

export default findUniq;
