function findMissingLetter(array: string[]): string | undefined {
  for (let i = 0; array.length - 1; i += 1) {
    const charCode = array[i].charCodeAt(0);
    const nextChar = String.fromCharCode(charCode + 1);

    if (array[i + 1] !== nextChar) {
      return nextChar;
    }
  }

  return undefined;
}

export default findMissingLetter;
