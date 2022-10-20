function solution(string: string, limit: number): string {
  if (string.length <= limit) {
    return string;
  }

  return `${string.slice(0, limit)}...`;
}

export default solution;
