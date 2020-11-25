function foldArray(array: number[], runs: number): number[] {
  const { length } = array;
  const result = [];

  if (!runs) {
    return array;
  }

  for (let i = 0; i < length / 2; i += 1) {
    const start = array[i];
    const end = length - 1 - i === i ? 0 : array[length - 1 - i];
    const sum = start + end;

    result.push(sum);
  }

  return foldArray(result, runs - 1);
}

export default foldArray;
