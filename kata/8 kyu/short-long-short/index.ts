function solution(a: string, b: string): string {
  return a.length < b.length ? a + b + a : b + a + b;
}

export default solution;
