import reverseSeq from '.';

describe('reverseSeq', () => {
  it('should return sequence in reversed order', () => {
    expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
  });
});
