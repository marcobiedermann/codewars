function duplicateEncode(string: string): string {
  return string
    .toLowerCase()
    .split('')
    .map((character, _index, word) =>
      word.indexOf(character) === word.lastIndexOf(character) ? '(' : ')',
    )
    .join('');
}

export default duplicateEncode;
