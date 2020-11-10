function solution(string: string): string {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export default solution;
