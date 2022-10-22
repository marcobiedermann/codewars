function sevenAte9(str: string): string {
  return str.replace(/79(?=7)/g, '7');
}

export default sevenAte9;
