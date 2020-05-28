function capitals(word: string): number[] {
  const { length } = word;
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const current = word[i];

    if (current === current.toUpperCase()) {
      result.push(i);
    }
  }

  return result;
}

export default capitals;
