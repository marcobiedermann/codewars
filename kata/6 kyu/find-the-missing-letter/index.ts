function findMissingLetter(array: string[]): string | undefined {
  for (let i = 0; array.length - 1; i += 1) {
    const current = array[i];
    const next = array[i + 1];
    const charCode = current.charCodeAt(0);
    const nextChar = String.fromCharCode(charCode + 1);

    if (next !== nextChar) {
      return nextChar;
    }
  }

  return undefined;
}

export default findMissingLetter;
