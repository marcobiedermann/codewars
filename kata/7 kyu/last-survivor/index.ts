function lastSurvivor(letters: string, coords: number[]): string {
  return coords.reduce((accumulator, currentValue) => {
    const start = accumulator.slice(0, currentValue);
    const end = accumulator.slice(currentValue + 1);

    return start + end;
  }, letters);
}

export default lastSurvivor;
