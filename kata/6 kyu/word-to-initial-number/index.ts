function convert(s: string): number {
  const map = new Map<string, number>();
  const lower = s.toLowerCase();
  let result = '';
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    const character = lower[i];

    if (!map.has(character)) {
      map.set(character, count > 1 ? count : 1 - count);
      count += 1;
    }

    result += map.get(character);
  }

  return parseInt(result, 10) || 0;
}

export default convert;
