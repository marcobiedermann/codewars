function count(
  array: string[],
): {
  [k: string]: number;
} {
  const map = new Map<string, number>();

  array.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1);
  });

  return Object.fromEntries(map.entries());
}

export default count;
