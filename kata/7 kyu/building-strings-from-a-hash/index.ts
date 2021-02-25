function solution(pairs: Record<string, unknown>): string {
  return Object.entries(pairs)
    .map(([key, value]) => `${key} = ${value}`)
    .join(',');
}

export default solution;
