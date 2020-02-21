function findNextSquare(sq: number): number {
  const root = Math.sqrt(sq);

  if (!Number.isInteger(root)) {
    return -1;
  }

  return (root + 1) ** 2;
}

export default findNextSquare;
