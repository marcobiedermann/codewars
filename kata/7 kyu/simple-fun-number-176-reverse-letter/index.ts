function reverseLetter(str: string): string {
  return (str.match(/[a-z]/gi) || []).reverse().join('');
}

export default reverseLetter;
