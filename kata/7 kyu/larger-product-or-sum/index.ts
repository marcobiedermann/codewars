function subtract(a: number, b: number): number {
  return a - b;
}

type SumOrProduct = 'sum' | 'product' | 'same';

function sumOrProduct(array: number[], n: number): SumOrProduct {
  const end = array.length - 1;
  const sortedArray = [...array].sort(subtract);

  let sum = 0;
  let product = 1;

  for (let i = 0; i < n; i += 1) {
    sum += sortedArray[end - i];
    product *= sortedArray[i];
  }

  if (sum > product) {
    return 'sum';
  }

  if (product > sum) {
    return 'product';
  }

  return 'same';
}

export default sumOrProduct;
