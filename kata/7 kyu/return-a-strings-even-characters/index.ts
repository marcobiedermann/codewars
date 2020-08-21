function evenChars(string: string): string[] | string {
  const { length } = string;
  const result = [];

  if (length < 2 || length > 100) {
    return 'invalid string';
  }

  for (let i = 1; i < length; i += 2) {
    const current = string[i];

    result.push(current);
  }

  return result;
}

export default evenChars;
