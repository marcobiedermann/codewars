function add(a: number, b: number) {
  return a + b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function isOdd(n: number): boolean {
  return n % 2 === 1;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function average(arr: number[]): number {
  return sum(arr) / arr.length;
}

function cube(arr: number[]): number[] {
  return arr.map((n) => n ** 3);
}

function even(arr: number[]): number[] {
  return arr.filter(isEven);
}

function odd(arr: number[]): number[] {
  return arr.filter(isOdd);
}

function square(arr: number[]): number[] {
  return arr.map((n) => n ** 2);
}

export { average, cube, even, odd, square, sum };
