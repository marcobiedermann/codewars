import sumOrProduct from '.';

describe('sumOrProduct', () => {
  it('should return the sum or product', () => {
    expect.assertions(3);

    expect(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toStrictEqual('sum');
    expect(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)).toStrictEqual('product');
    expect(sumOrProduct([10, 20, 3, 30, 5, 4], 3)).toStrictEqual('same');
  });

  it('should not modify the input', () => {
    expect.assertions(1);

    const input = [10, 41, 8, 16, 20, 36, 9, 13, 20];

    sumOrProduct(input, 4);

    expect(input).toStrictEqual([10, 41, 8, 16, 20, 36, 9, 13, 20]);
  });
});
