function capMe(names: string[]): string[] {
  return names.map((name) => {
    const [first, ...rest] = name.toLowerCase();

    return `${first.toUpperCase()}${rest.join('')}`;
  });
}

export default capMe;
