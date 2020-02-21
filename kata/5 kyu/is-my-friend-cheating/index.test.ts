import removeNb from '.';

describe('removeNb', () => {
  it('should return array of all numbers which are the possible removed numbers in the sequence', () => {
    expect.assertions(2);

    expect(removeNb(26)).toStrictEqual([
      [15, 21],
      [21, 15],
    ]);
    expect(removeNb(100)).toStrictEqual([]);
  });
});
