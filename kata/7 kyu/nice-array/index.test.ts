import isNice from '.';

describe('isNice', () => {
  it('should check if array is nice', () => {
    expect.assertions(3);

    expect(isNice([2, 10, 9, 3])).toBe(true);
    expect(isNice([3, 4, 5, 7])).toBe(false);
    expect(isNice([])).toBe(false);
  });
});
