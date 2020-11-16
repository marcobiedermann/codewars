function subtract(a: number, b: number): number {
  return a - b;
}

function minSum(arr: number[]): number {
  const { length } = arr;
  let total = 0;

  arr.sort(subtract);

  for (let i = 0; i < length / 2; i += 1) {
    const min = arr[i];
    const max = arr[length - i - 1];

    total += min * max;
  }

  return total;
}

export default minSum;
