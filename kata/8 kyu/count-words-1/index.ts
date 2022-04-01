function countWords(str: string): number {
  const trimmedWords = str.trim();

  if (trimmedWords.length === 0) {
    return 0;
  }

  return trimmedWords.split(/\s+/).length;
}

export default countWords;
