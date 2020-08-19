function nextId(ids: number[]): number {
  const set = new Set<number>(ids);
  let i = 0;

  while (set.has(i)) {
    i += 1;
  }

  return i;
}

export default nextId;
