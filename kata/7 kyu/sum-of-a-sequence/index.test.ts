import sequenceSum from '.';

describe('sequenceSum', () => {
  it('should return sum of sequence', () => {
    expect.assertions(3);

    expect(sequenceSum(2, 6, 2)).toStrictEqual(12);
    expect(sequenceSum(1, 5, 1)).toStrictEqual(15);
    expect(sequenceSum(1, 5, 3)).toStrictEqual(5);
  });
});
