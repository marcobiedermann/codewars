function orderedCount(text: string): [string, number][] {
  const map = new Map<string, number>();

  for (let i = 0; i < text.length; i += 1) {
    const current = text[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  return [...map.entries()];
}

export default orderedCount;
