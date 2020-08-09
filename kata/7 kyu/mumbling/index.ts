function accum(s: string): string {
  return s
    .split('')
    .map((character, index) => `${character.toUpperCase()}${character.toLowerCase().repeat(index)}`)
    .join('-');
}

export default accum;
