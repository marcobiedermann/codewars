function findNb(m: number, cubes = 0): number {
  if (m <= 0) {
    return m ? -1 : cubes;
  }

  const volume = (cubes + 1) ** 3;

  return findNb(m - volume, cubes + 1);
}

export default findNb;
