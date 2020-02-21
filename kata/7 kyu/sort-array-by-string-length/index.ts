function sortByLength(array: string[]): string[] {
  return array.sort((a, b) => a.length - b.length);
}

export default sortByLength;
