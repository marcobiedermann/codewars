function countRedBeads(n: number): number {
  if (n < 2) {
    return 0;
  }

  return (n - 1) * 2;
}

export default countRedBeads;
