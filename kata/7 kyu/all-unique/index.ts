function hasUniqueChars(str: string): boolean {
  const set = new Set(str);

  return set.size === str.length;
}

export default hasUniqueChars;
