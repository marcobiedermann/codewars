function firstNonRepeatingLetter(s: string): string {
  const map = new Map<string, number>();
  const letters = s.split('');

  letters.forEach((letter) => {
    const lower = letter.toLowerCase();

    map.set(lower, (map.get(lower) || 0) + 1);
  });

  return letters.find((letter) => map.get(letter.toLowerCase()) === 1) || '';
}

export default firstNonRepeatingLetter;
