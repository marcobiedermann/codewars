import sequenceSum from '.';

describe('sequenceSum', () => {
  it('should return sum of sequence', () => {
    expect(sequenceSum(2, 6, 2)).toEqual(12);
    expect(sequenceSum(1, 5, 1)).toEqual(15);
    expect(sequenceSum(1, 5, 3)).toEqual(5);
  });
});
