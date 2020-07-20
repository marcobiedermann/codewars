function findMultiples(integer: number, limit: number): number[] {
  const multiples = [];

  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}

export default findMultiples;
