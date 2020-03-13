function findLongest(array: number[]): number {
  return array.reduce((accumulator, currentValue) =>
    accumulator.toString().length < currentValue.toString().length ? currentValue : accumulator,
  );
}

export default findLongest;
