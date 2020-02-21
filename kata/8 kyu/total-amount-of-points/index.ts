function points(games: string[]): number {
  return games.reduce((accumulator, currentValue) => {
    const [x, y] = currentValue.split(':').map(Number);

    if (x > y) {
      return accumulator + 3;
    }

    if (x < y) {
      return accumulator;
    }

    return accumulator + 1;
  }, 0);
}

export default points;
