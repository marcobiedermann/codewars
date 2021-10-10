function encode(string: string): string {
  return string.replace(/[aeiou]/g, (character) => '_aeiou'.indexOf(character).toString());
}

function decode(string: string): string {
  return string.replace(/[1-5]/g, (index) => '_aeiou'.charAt(parseInt(index, 10)));
}

export { encode, decode };
