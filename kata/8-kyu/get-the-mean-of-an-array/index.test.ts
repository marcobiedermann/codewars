import getAverage from '.';

describe('getAverage', () => {
  it('should return rounded average of numbers', () => {
    expect(getAverage([2, 2, 2, 2])).toEqual(2);
    expect(getAverage([1, 2, 3, 4, 5])).toEqual(3);
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toEqual(1);
  });
});
