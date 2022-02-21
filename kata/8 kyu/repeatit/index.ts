function repeatIt(str: any, n: number): string | 'Not a string' {
  if (typeof str !== 'string') {
    return 'Not a string';
  }

  return str.repeat(n);
}

export default repeatIt;
