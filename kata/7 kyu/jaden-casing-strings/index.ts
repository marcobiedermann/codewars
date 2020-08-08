function toJadenCase(str: string): string {
  return str
    .split(' ')
    .map((word) => word.replace(/\w/, (character) => character.toUpperCase()))
    .join(' ');
}

export default toJadenCase;
