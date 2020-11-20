function vowelIndices(word: string): number[] {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const result = [];

  for (let i = 0; i < word.length; i += 1) {
    const current = word[i].toLowerCase();

    if (vowels.includes(current)) {
      result.push(i + 1);
    }
  }

  return result;
}

export default vowelIndices;
