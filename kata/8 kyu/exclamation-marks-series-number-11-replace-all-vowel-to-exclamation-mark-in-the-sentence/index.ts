function replace(s: string): string {
  return s.replace(/[aeiou]/gi, '!');
}

export default replace;
