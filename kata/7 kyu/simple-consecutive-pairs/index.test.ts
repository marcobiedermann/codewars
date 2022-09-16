import pairs from '.';

describe('pairs', () => {
  it('should count the number of consecutive pairs', () => {
    expect.assertions(5);

    expect(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])).toBe(3);
    expect(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])).toBe(2);
    expect(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])).toBe(0);
    expect(pairs([-55, -56, -7, -6, 56, 55, 63, 62])).toBe(4);
    expect(pairs([73, 72, 8, 9, 73, 72])).toBe(3);
  });
});
