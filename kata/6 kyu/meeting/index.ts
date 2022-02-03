function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map((name) => name.split(':').reverse().join(', '))
    .sort()
    .map((name) => `(${name})`)
    .join('');
}

export default meeting;
