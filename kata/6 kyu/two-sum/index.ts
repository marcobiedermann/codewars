function twoSum(numbers: number[], target: number): number[] | undefined {
  const { length } = numbers;
  const map = new Map<number, number>();

  for (let i = 0; i < length; i += 1) {
    const current = numbers[i];
    const diff = target - current;

    if (map.has(diff)) {
      return [map.get(diff) || 0, i];
    }

    map.set(current, i);
  }

  return undefined;
}

export default twoSum;
