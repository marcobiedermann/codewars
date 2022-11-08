function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function twistedSum(n: number): number {
  let total = 0;

  for (let i = 1; i <= n; i += 1) {
    total += sum(i.toString().split('').map(Number));
  }

  return total;
}

export default twistedSum;
