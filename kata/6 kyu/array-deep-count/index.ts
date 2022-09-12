function deepCount<T>(a: T[]): number {
  return a.reduce(
    (accumulator, currentValue) =>
      Array.isArray(currentValue) ? accumulator + deepCount(currentValue) : accumulator,
    a.length,
  );
}

export default deepCount;
