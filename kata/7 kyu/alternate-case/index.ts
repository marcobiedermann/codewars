function isLowerCase(s: string): boolean {
  return s === s.toLowerCase();
}

function alternateCase(s: string): string {
  return s
    .split('')
    .map((character) => {
      if (isLowerCase(character)) {
        return character.toUpperCase();
      }

      return character.toLowerCase();
    })
    .join('');
}

export default alternateCase;
