function sumIntegers(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function partsSums(ls: number[]): number[] {
  const sum = sumIntegers(ls);
  let cache = sum;

  return [
    sum,
    ...ls.map((_n, index) => {
      cache -= ls[index];

      return cache;
    }),
  ];
}

export default partsSums;
