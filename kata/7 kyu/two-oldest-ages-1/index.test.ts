import twoOldestAges from '.';

describe('twoOldestAges', () => {
  it('should return two oldest ages', () => {
    expect(twoOldestAges([1, 2, 10, 8])).toStrictEqual([8, 10]);
  });
});
