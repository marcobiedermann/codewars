import findDeletedNumber from '.';

describe('findDeletedNumber', () => {
  it('should find the deleted number', () => {
    expect.assertions(3);

    expect(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])).toBe(2);
    expect(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])).toBe(5);
    expect(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])).toBe(0);
  });
});
