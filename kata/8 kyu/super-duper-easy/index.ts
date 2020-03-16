function problem(x: number | string): number | string {
  if (typeof x !== 'number') {
    return 'Error';
  }

  return x * 50 + 6;
}

export default problem;
