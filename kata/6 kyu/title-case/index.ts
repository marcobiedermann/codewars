function capitalize(str: string): string {
  const first = str.slice(0, 1);
  const rest = str.slice(1);

  return first.toUpperCase() + rest;
}

function titleCase(str: string, list = ''): string {
  const wordList = new Set(list.toLowerCase().split(' '));

  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return capitalize(word);
      }

      return wordList.has(word) ? word : capitalize(word);
    })
    .join(' ');
}

export default titleCase;
