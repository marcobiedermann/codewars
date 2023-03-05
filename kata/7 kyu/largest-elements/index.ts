function subtract(a: number, b: number): number {
  return a - b;
}

function largest(n: number, array: number[]): number[] {
  return array.sort(subtract).slice(array.length - n);
}

export default largest;
