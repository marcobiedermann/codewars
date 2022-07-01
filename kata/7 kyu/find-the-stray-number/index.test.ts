import stray from '.';

describe('stray', () => {
  it('should find single different number', () => {
    expect(stray([1, 1, 2])).toBe(2);
    expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
  });
});
