function isEven(n: number): boolean {
  return n % 2 === 0;
}

function unique(arr: number[]): number[] {
  return [...new Set(arr)];
}

function subtract(a: number, b: number): number {
  return a - b;
}

function menFromBoys(arr: number[]): number[] {
  const even: number[] = [];
  const odd: number[] = [];

  unique(arr)
    .sort(subtract)
    .forEach((n) => (isEven(n) ? even.push(n) : odd.unshift(n)));

  return [...even, ...odd];
}

export default menFromBoys;
