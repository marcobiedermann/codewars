function isNice(arr: number[]): boolean {
  if (!arr.length) {
    return false;
  }

  const set = new Set<number>(arr);

  return arr.every((number) => set.has(number + 1) || set.has(number - 1));
}

export default isNice;
