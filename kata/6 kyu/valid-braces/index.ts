interface Matches {
  [key: string]: string;
}

function validBraces(braces: string): boolean {
  const bracesLength = braces.length;
  const matches: Matches = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (let i = 0; i < bracesLength; i += 1) {
    const currentBrace = braces[i];

    if (matches[currentBrace]) {
      stack.push(currentBrace);
    } else {
      const lastBrace: any = stack.pop();

      if (currentBrace !== matches[lastBrace]) {
        return false;
      }
    }
  }

  return !stack.length;
}

export default validBraces;
