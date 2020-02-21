import countBy from '.';

describe('countBy', () => {
  it('should return array of multiples', () => {
    expect(countBy(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});
