function adjacentElementsProduct(array: number[]): number {
  let max = -Infinity;

  for (let i = 0; i < array.length - 1; i += 1) {
    const current = array[i];
    const next = array[i + 1];
    const product = current * next;

    if (product > max) {
      max = product;
    }
  }

  return max;
}

export default adjacentElementsProduct;
