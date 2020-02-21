function toAlternatingCase(str: string): string {
  return str
    .split('')
    .map(character =>
      character === character.toLowerCase() ? character.toUpperCase() : character.toLowerCase(),
    )
    .join('');
}

export default toAlternatingCase;
