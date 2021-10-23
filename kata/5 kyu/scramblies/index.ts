function scramble(str1: string, str2: string): boolean {
  const map = new Map();

  for (let i = 0; i < str1.length; i += 1) {
    const current = str1[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i += 1) {
    const current = str2[i];

    if (!map.has(current)) {
      return false;
    }

    const newValue = map.get(current) - 1;

    if (newValue < 0) {
      return false;
    }

    map.set(current, newValue);
  }

  return true;
}

export default scramble;
