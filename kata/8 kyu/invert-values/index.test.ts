import invert from '.';

describe('invent', () => {
  it('should return inverse of each', () => {
    expect(invert([1, 2, 3, 4, 5])).toStrictEqual([-1, -2, -3, -4, -5]);
    expect(invert([1, -2, 3, -4, 5])).toStrictEqual([-1, 2, -3, 4, -5]);
    expect(invert([])).toStrictEqual([]);
    expect(invert([0])).toStrictEqual([0]);
  });
});
