function findUnique(numbers: number[]): number | undefined {
  const { length } = numbers;
  const map = new Map<number, number>();

  for (let i = 0; i < length; i += 1) {
    const current = numbers[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < length; i += 1) {
    const current = numbers[i];

    if (map.get(current) === 1) {
      return current;
    }
  }

  return undefined;
}

export default findUnique;
