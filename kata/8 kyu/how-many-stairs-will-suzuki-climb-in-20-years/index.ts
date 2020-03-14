function add(a: number, b: number): number {
  return a + b;
}

function sum(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

function stairsIn20(s: number[][]): number {
  return (
    s.reduce((accumulatr, currentValue) => {
      return accumulatr + sum(currentValue);
    }, 0) * 20
  );
}

export default stairsIn20;
