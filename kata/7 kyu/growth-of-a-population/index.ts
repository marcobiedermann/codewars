function nbYear(p0: number, percent: number, aug: number, p: number, years = 0): number {
  if (p0 >= p) {
    return years;
  }

  const population = p0 + p0 * (percent / 100) + aug;

  return nbYear(population, percent, aug, p, years + 1);
}

export default nbYear;
