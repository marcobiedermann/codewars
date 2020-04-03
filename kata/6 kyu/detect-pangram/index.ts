function isPangram(string: string): boolean {
  const matches = string.toLowerCase().match(/[a-z]/gi);
  const set = new Set(matches);

  return set.size === 26;
}

export default isPangram;
