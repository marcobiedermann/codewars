function add(a: number, b: number): number {
  return a + b;
}

function findMissing(list: number[]): number {
  const { length } = list;
  const first = list[0];
  const last = list[length - 1];

  const expectedSum = ((first + last) * (length + 1)) / 2;
  const sum = list.reduce(add);

  return expectedSum - sum;
}

export default findMissing;
