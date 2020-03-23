function infected(s: string): number {
  const continents = s.split('X');
  const total = continents.join('').length;
  const totalInfected = continents
    .filter((continent) => [...continent].some((person) => person === '1'))
    .join('').length;

  if (!total) {
    return 0;
  }

  return 100 * (totalInfected / total);
}

export default infected;
