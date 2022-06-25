function sameCase(a: string, b: string): -1 | 0 | 1 {
  if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1;
  }

  if (
    (a.toLowerCase() === a && b.toLowerCase() === b) ||
    (a.toUpperCase() === a && b.toUpperCase() === b)
  ) {
    return 1;
  }

  return 0;
}

export default sameCase;
