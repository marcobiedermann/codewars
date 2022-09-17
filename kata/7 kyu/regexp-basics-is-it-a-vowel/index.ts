function vowel(str: string): boolean {
  return /^[aeiou]$/i.test(str);
}

export default vowel;
