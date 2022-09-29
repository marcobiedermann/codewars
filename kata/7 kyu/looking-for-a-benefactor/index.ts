function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function newAvg(arr: number[], newavg: number): number {
  const x = Math.ceil(newavg * (arr.length + 1) - sum(arr));

  if (x <= 0) {
    throw new Error('Expected New Average is too low');
  }

  return x;
}

export default newAvg;
