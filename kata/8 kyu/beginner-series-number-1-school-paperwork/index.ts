function paperwork(n: number, m: number): number {
  if (n < 0 || m < 0) {
    return 0;
  }

  return n * m;
}

export default paperwork;
