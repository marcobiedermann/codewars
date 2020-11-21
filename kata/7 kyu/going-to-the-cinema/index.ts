function movie(card: number, ticket: number, perc: number): number {
  let n = 0;
  let systemA = 0;
  let systemB = card;

  while (Math.ceil(systemA) <= Math.ceil(systemB)) {
    n += 1;
    systemA += ticket;
    systemB += ticket * perc ** n;
  }

  return n;
}

export default movie;
