function solve(str: string): string {
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    const current = str[i];

    if (current !== ' ') {
      result += current;
    }

    if (str[result.length] === ' ') {
      result += str[result.length];
    }
  }

  return result;
}

export default solve;
