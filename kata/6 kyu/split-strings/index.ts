function solution(str: string): string[] {
  return `${str}_`.match(/.{2}/g) || [];
}

export default solution;
