function numberOfPairs(gloves: string[]): number {
  const map = new Map<string, number>();
  let pairs = 0;

  gloves.forEach((glove) => {
    map.set(glove, (map.get(glove) || 0) + 1);

    if (map.get(glove) === 2) {
      pairs += 1;

      map.set(glove, 0);
    }
  });

  return pairs;
}

export default numberOfPairs;
