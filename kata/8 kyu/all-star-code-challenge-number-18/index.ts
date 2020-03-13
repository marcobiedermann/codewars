function strCount(str: string, letter: string): number {
  const regex = new RegExp(letter, 'g');

  return (str.match(regex) || []).length;
}

export default strCount;
