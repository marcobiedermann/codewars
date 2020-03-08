function remove(s: string, n: number): string {
  if (!n) {
    return s;
  }

  return remove(s.replace('!', ''), n - 1);
}

export default remove;
