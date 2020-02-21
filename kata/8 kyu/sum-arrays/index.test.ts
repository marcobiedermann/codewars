import sum from '.';

describe('sum', () => {
  it('should sum all numbers in array', () => {
    expect.assertions(2);

    expect(sum([])).toStrictEqual(0);
    expect(sum([1, 5.2, 4, 0, -1])).toStrictEqual(9.2);
  });
});
