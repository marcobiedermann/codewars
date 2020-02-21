import digitize from '.';

describe('digitize', () => {
  it('should return digits of number within an array in reversed order', () => {
    expect.assertions(1);

    expect(digitize(35231)).toStrictEqual([1, 3, 2, 5, 3]);
  });
});
