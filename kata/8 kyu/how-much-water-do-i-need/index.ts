function howMuchWater(
  water: number,
  load: number,
  clothes: number,
): number | 'Too much clothes' | 'Not enough clothes' {
  if (clothes > load * 2) {
    return 'Too much clothes';
  }

  if (clothes < load) {
    return 'Not enough clothes';
  }

  const result = water * 1.1 ** (clothes - load);

  return Math.round((result + Number.EPSILON) * 100) / 100;
}

export default howMuchWater;
