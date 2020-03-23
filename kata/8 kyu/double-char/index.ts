function doubleChar(str: string): string {
  return [...str].map((char) => char.repeat(2)).join('');
}

export default doubleChar;
