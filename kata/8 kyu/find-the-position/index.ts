function position(letter: string): string {
  return `Position of alphabet: ${letter.charCodeAt(0) % 32}`;
}

export default position;
