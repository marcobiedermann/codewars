import twoHighest from '.';

describe('twoHighest', () => {
  it('should return the two distinct highest values in a list', () => {
    expect.assertions(3);

    expect(twoHighest([])).toStrictEqual([]);
    expect(twoHighest([15])).toStrictEqual([15]);
    expect(twoHighest([15, 20, 20, 17])).toStrictEqual([20, 17]);
  });
});
