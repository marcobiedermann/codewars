function numberOfOccurrences<T>(arr: T[], key: T): number {
  const map = new Map<T, number>();

  arr.forEach((item) => map.set(item, (map.get(item) || 0) + 1));

  return map.get(key) || 0;
}

export default numberOfOccurrences;
