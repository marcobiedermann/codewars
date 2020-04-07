function wave(word: string): string[] {
  const { length } = word;
  const result: string[] = [];

  for (let i = 0; i < length; i += 1) {
    const start = word.slice(0, i);
    const middle = word.slice(i, i + 1);
    const end = word.slice(i + 1, length);

    if (middle !== ' ') {
      result.push(`${start}${middle.toUpperCase()}${end}`);
    }
  }

  return result;
}

export default wave;
