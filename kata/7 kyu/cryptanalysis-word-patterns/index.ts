function wordPattern(word: string): string {
  const lower = word.toLowerCase();
  const result = [];
  const map = new Map<string, number>();

  for (let i = 0; i < word.length; i += 1) {
    const current = lower[i];

    if (!map.has(current)) {
      map.set(current, map.size);
    }

    result.push(map.get(current));
  }

  return result.join('.');
}

export default wordPattern;
