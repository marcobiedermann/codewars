function dative(word: string): string {
  return /[aáoóuú]/.test(word) ? `${word}nak` : `${word}nek`;
}

export default dative;
