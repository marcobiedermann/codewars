import sequenceSum from '.';

describe('sequenceSum', () => {
  it('should return sum of sequence', () => {
    expect(sequenceSum(2, 6, 2)).toBe(12);
    expect(sequenceSum(1, 5, 1)).toBe(15);
    expect(sequenceSum(1, 5, 3)).toBe(5);
  });
});
