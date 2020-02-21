import sum from '.';

describe('sum', () => {
  it('should sum all numbers in array', () => {
    expect(sum([])).toEqual(0);
    expect(sum([1, 5.2, 4, 0, -1])).toEqual(9.2);
  });
});
