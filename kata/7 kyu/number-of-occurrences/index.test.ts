import numberOfOccurrences from '.';

describe('numberOfOccurrences', () => {
  it('should return number of occurrences', () => {
    expect.assertions(1);

    expect(numberOfOccurrences([4, 0, 4], 4)).toStrictEqual(2);
  });
});
