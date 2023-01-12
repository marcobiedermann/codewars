function mostFrequentItemCount<T>(collection: T[]): number {
  const map = new Map<T, number>();
  let max = 0;

  collection.forEach((item) => {
    const newValue = (map.get(item) || 0) + 1;

    map.set(item, newValue);
    max = Math.max(max, newValue);
  });

  return max;
}

export default mostFrequentItemCount;
