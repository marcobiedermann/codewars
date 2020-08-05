function getWorth(side: string, worth: number[]): number {
  return side
    .split(' ')
    .reduce(
      (accumulator, currentValue, index) => accumulator + worth[index] * parseInt(currentValue, 10),
      0,
    );
}

function goodVsEvil(good: string, evil: string): string {
  const goodWorth = getWorth(good, [1, 2, 3, 3, 4, 10]);
  const evilWorth = getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);

  if (goodWorth > evilWorth) {
    return 'Battle Result: Good triumphs over Evil';
  }

  if (evilWorth > goodWorth) {
    return 'Battle Result: Evil eradicates all trace of Good';
  }

  return 'Battle Result: No victor on this battle field';
}

export default goodVsEvil;
