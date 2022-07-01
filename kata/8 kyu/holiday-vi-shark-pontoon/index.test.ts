import shark from '.';

describe('shark', () => {
  it('should return "Alive!" if you make it, if not, return "Shark Bait!".', () => {
    expect(shark(12, 50, 4, 8, true)).toBe('Alive!');
    expect(shark(7, 55, 4, 16, true)).toBe('Alive!');
    expect(shark(24, 0, 4, 8, true)).toBe('Shark Bait!');
    expect(shark(24, 0, 4, 8, false)).toBe('Shark Bait!');
  });
});
