function longest(s1: string, s2: string): string {
  return [...new Set(s1 + s2)].sort().join('');
}

export default longest;
