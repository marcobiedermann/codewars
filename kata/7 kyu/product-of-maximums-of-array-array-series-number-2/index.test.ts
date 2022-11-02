import maxProduct from '.';

describe('maxProduct', () => {
  it('should return the product of the `k` maximal numbers', () => {
    expect.assertions(10);

    expect(maxProduct([4, 3, 5], 2)).toBe(20);
    expect(maxProduct([10, 8, 7, 9], 3)).toBe(720);
    expect(maxProduct([8, 6, 4, 6], 3)).toBe(288);
    expect(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)).toBe(9600);
    expect(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)).toBe(247895375);
    expect(maxProduct([-4, -27, -15, -6, -1], 2)).toBe(4);
    expect(maxProduct([-17, -8, -102, -309], 2)).toBe(136);
    expect(maxProduct([10, 3, -27, -1], 3)).toStrictEqual(-30);
    expect(maxProduct([14, 29, -28, 39, -16, -48], 4)).toStrictEqual(-253344);
    expect(maxProduct([1], 1)).toBe(1);
  });
});
