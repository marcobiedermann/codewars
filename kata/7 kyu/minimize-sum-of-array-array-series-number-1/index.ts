function subtract(a: number, b: number): number {
  return a - b;
}

function minSum(arr: number[]): number {
  const { length } = arr;

  return (
    arr.sort(subtract).reduce((accumulator, currentValue, index) => {
      return accumulator + currentValue * arr[length - index - 1];
    }, 0) / 2
  );
}

export default minSum;
