function switcheroo(x: string): string {
  return x.replace(/[ab]/g, (character) => (character === 'a' ? 'b' : 'a'));
}

export default switcheroo;
