function isAnagram(test: string, original: string): boolean {
  const map = new Map<string, number>();
  const testNormalized = test.toLowerCase();
  const originalNormalized = original.toLowerCase();

  if (test.length !== original.length) {
    return false;
  }

  for (let i = 0; i < testNormalized.length; i += 1) {
    const current = testNormalized[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < originalNormalized.length; i += 1) {
    const current = originalNormalized[i];

    if (!map.get(current)) {
      return false;
    }

    map.set(current, (map.get(current) || 0) - 1);
  }

  return true;
}

export default isAnagram;
