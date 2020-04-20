function isDigit(s: string): boolean {
  return !!s.trim() && !Number.isNaN(+s);
}

export default isDigit;
