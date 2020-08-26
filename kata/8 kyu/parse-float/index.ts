function parseF(s: string): number | null {
  const parsed = parseFloat(s);

  if (Number.isNaN(parsed)) {
    return null;
  }

  return parsed;
}

export default parseF;
