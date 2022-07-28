function createFunctions(n: number): (() => number)[] {
  return Array.from({ length: n }, (_, i) => () => i);
}

export default createFunctions;
