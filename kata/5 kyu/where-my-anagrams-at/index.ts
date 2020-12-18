function isAnagram(a: string, b: string): boolean {
  const map = new Map<string, number>();

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i += 1) {
    const current = a[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < b.length; i += 1) {
    const current = b[i];
    const entry = map.get(current) || 0;

    if (!entry) {
      return false;
    }

    map.set(current, entry - 1);
  }

  return true;
}

function anagrams(target: string, words: string[]): string[] {
  return words.filter((word) => isAnagram(target, word));
}

export default anagrams;
