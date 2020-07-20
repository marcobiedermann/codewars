import findMultiples from '.';

describe('findMultiples', () => {
  it('should find multiples of number', () => {
    expect.assertions(5);

    expect(findMultiples(5, 25)).toStrictEqual([5, 10, 15, 20, 25]);
    expect(findMultiples(1, 2)).toStrictEqual([1, 2]);
    expect(findMultiples(5, 7)).toStrictEqual([5]);
    expect(findMultiples(4, 27)).toStrictEqual([4, 8, 12, 16, 20, 24]);
    expect(findMultiples(11, 54)).toStrictEqual([11, 22, 33, 44]);
  });
});
