import findMissing from '.';

describe('findMissing', () => {
  it('should find missing term in in arithmetic progression', () => {
    expect.assertions(1);

    expect(findMissing([1, 3, 4])).toBe(2);
  });
});
