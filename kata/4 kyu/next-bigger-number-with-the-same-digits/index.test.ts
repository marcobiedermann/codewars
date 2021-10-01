import nextBigger from '.';

describe('nextBigger', () => {
  it('should return next bigger number', () => {
    expect.assertions(8);

    expect(nextBigger(12)).toBe(21);
    expect(nextBigger(513)).toBe(531);
    expect(nextBigger(2017)).toBe(2071);
    expect(nextBigger(414)).toBe(441);
    expect(nextBigger(144)).toBe(414);
    expect(nextBigger(9)).toStrictEqual(-1);
    expect(nextBigger(111)).toStrictEqual(-1);
    expect(nextBigger(531)).toStrictEqual(-1);
  });
});
