function sumArray(array: number[] = []): number {
  if (!array) {
    return 0;
  }

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default sumArray;
