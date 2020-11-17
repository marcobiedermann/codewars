function productFib(prod: number): [number, number, boolean] {
  let a = 0;
  let b = 1;

  while (a * b < prod) {
    b = a + b;
    a = b - a;
  }

  return [a, b, a * b === prod];
}

export default productFib;
