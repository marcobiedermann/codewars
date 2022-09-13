function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function thirt(n: number): number {
  const total = sum(
    n
      .toString()
      .split('')
      .map(
        (number, index, array) => parseInt(number, 10) * (10 ** (array.length - index - 1) % 13),
      ),
  );

  if (n === total) {
    return n;
  }

  return thirt(total);
}

export default thirt;
