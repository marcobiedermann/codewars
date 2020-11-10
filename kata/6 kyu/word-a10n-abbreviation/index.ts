function abbreviate(string: string): string {
  return string.replace(/\B\w{2,}\B/g, (word) => `${word.length}`);
}

export default abbreviate;
