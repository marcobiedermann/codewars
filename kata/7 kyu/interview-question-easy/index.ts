function getStrings(city: string): string {
  const letters = city
    .toLowerCase()
    .split('')
    .filter((letter) => letter !== ' ');
  const map = new Map<string, number>();

  letters.forEach((letter) => {
    map.set(letter, (map.get(letter) || 0) + 1);
  });

  const result: string[] = [];

  map.forEach((value, key) => {
    result.push(`${key}:${'*'.repeat(value)}`);
  });

  return result.join(',');
}

export default getStrings;
