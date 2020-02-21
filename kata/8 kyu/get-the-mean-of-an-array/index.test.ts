import getAverage from '.';

describe('getAverage', () => {
  it('should return rounded average of numbers', () => {
    expect.assertions(3);

    expect(getAverage([2, 2, 2, 2])).toStrictEqual(2);
    expect(getAverage([1, 2, 3, 4, 5])).toStrictEqual(3);
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toStrictEqual(1);
  });
});
