import index from '.';

describe('index', () => {
  it('should return the N-th power of the element in the array with the index N', () => {
    expect.assertions(10);

    expect(index([1, 2, 3, 4], 2)).toStrictEqual(9);
    expect(index([1, 3, 10, 100], 3)).toStrictEqual(1000000);
    expect(index([0, 1], 0)).toStrictEqual(1);
    expect(index([1, 2], 3)).toStrictEqual(-1);
    expect(index([0], 0)).toStrictEqual(1);
    expect(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9)).toStrictEqual(1);
    expect(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9)).toStrictEqual(512);
    expect(index([29, 82, 45, 10], 3)).toStrictEqual(1000);
    expect(index([6, 31], 3)).toStrictEqual(-1);
    expect(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10)).toStrictEqual(-1);
  });
});
