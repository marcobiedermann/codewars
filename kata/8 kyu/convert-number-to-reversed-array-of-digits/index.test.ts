import digitize from '.';

describe('digitize', () => {
  it('should return digits of number within an array in reversed order', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });
});
