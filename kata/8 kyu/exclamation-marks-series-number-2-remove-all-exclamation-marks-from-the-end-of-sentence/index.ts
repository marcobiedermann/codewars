function remove(s: string): string {
  return s.replace(/!+$/, '');
}

export default remove;
