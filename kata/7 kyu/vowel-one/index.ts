function vowelOne(s: string): string {
  return s.replace(/([aeiou])|./gi, (_, vowel) => {
    return vowel ? '1' : '0';
  });
}

export default vowelOne;
