function isEven(n: number): boolean {
  return n % 2 === 0;
}

function findOutlier(integers: number[]): number {
  const evens: number[] = [];
  const odds: number[] = [];

  for (let i = 0; i < integers.length; i += 1) {
    const current = integers[i];

    if (isEven(current)) {
      evens.push(current);
    } else {
      odds.push(current);
    }
  }

  return evens.length === 1 ? evens[0] : odds[0];
}

export default findOutlier;
