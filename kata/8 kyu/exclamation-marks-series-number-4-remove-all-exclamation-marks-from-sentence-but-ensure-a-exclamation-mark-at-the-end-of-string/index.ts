function remove(s: string): string {
  return `${s.replace(/!/g, '')}!`;
}

export default remove;
