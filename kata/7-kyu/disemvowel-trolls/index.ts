function disemvowel(str: string): string {
  return str.replace(/[aeiou]/gi, "");
}

export default disemvowel;
