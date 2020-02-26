function twoSort(s: string[]): string {
  const sortedWords = s.sort();

  const [first] = sortedWords;

  return first.split('').join('***');
}

export default twoSort;
