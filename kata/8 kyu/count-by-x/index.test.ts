import countBy from '.';

describe('countBy', () => {
  it('should return array of multiples', () => {
    expect.assertions(2);

    expect(countBy(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
  });
});
