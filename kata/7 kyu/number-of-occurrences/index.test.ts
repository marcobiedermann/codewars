import numberOfOccurrences from '.';

describe('numberOfOccurrences', () => {
  it('should return number of occurrences', () => {
    expect(numberOfOccurrences([4, 0, 4], 4)).toBe(2);
  });
});
