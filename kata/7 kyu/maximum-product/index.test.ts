import adjacentElementsProduct from '.';

describe('adjacentElementsProduct', () => {
  it('positive numbers', () => {
    expect.assertions(5);

    expect(adjacentElementsProduct([5, 8])).toStrictEqual(40);
    expect(adjacentElementsProduct([1, 2, 3])).toStrictEqual(6);
    expect(adjacentElementsProduct([1, 5, 10, 9])).toStrictEqual(90);
    expect(adjacentElementsProduct([4, 12, 3, 1, 5])).toStrictEqual(48);
    expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toStrictEqual(6);
  });

  it('both positive and negative values', () => {
    expect.assertions(5);

    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toStrictEqual(21);
    expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toStrictEqual(50);
    expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toStrictEqual(30);
    expect(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toStrictEqual(-14);
    expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toStrictEqual(6);
  });

  it('contains zeroes', () => {
    expect.assertions(2);

    expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toStrictEqual(0);
    expect(adjacentElementsProduct([1, 2, 3, 0])).toStrictEqual(6);
  });
});
