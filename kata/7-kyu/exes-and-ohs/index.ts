function XO(str: string): boolean {
  const xMatch = str.match(/x/gi) || [];
  const oMatch = str.match(/o/gi) || [];

  return xMatch.length === oMatch.length;
}

export default XO;
