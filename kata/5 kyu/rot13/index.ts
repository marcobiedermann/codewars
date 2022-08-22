function rot13(str: string): string {
  const n = 13;

  return str.replace(/[a-z]/gi, (character) => {
    const code = character.charCodeAt(0);
    const start = code >= 65 && code <= 90 ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    return String.fromCharCode(start + ((code - start + n) % 26));
  });
}

export default rot13;
