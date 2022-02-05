import getMissingElement from '.';

describe('getMissingElement', () => {
  it('should find the missing element in the sequence', () => {
    expect.assertions(2);

    expect(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])).toBe(8);
    expect(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])).toBe(3);
  });
});
