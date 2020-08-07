function capitalizeWord(word: string): string {
  const [first] = word;

  return `${first.toUpperCase()}${word.slice(1)}`;
}

export default capitalizeWord;
