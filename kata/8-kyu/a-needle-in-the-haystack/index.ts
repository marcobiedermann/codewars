function findNeedle(haystack: any[]): string {
  const position = haystack.indexOf('needle');

  return `found the needle at position ${position}`;
}

export default findNeedle;
