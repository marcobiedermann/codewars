import SmallestIntegerFinder from '.';

describe('smallestIntegerFinder', () => {
  it('should find the smallest integer', () => {
    const smallestIntegerFinder = new SmallestIntegerFinder();

    expect(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8])).toBe(8);
    expect(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 18])).toBe(12);
    expect(smallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228])).toBe(56);
    expect(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 0])).toBe(0);
    expect(smallestIntegerFinder.findSmallestInt([1, 56, 232, 12, 8])).toBe(1);
  });
});
