function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function product(arr: number[]): number {
  return arr.reduce(multiply, 1);
}

function maxProduct(numbers: number[], size: number): number {
  return product(numbers.sort(subtract).slice(-size));
}

export default maxProduct;
