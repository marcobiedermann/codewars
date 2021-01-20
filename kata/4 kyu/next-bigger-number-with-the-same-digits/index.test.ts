import nextBigger from '.';

describe('nextBigger', () => {
  it('should return next bigger number', () => {
    expect.assertions(8);

    expect(nextBigger(12)).toStrictEqual(21);
    expect(nextBigger(513)).toStrictEqual(531);
    expect(nextBigger(2017)).toStrictEqual(2071);
    expect(nextBigger(414)).toStrictEqual(441);
    expect(nextBigger(144)).toStrictEqual(414);
    expect(nextBigger(9)).toStrictEqual(-1);
    expect(nextBigger(111)).toStrictEqual(-1);
    expect(nextBigger(531)).toStrictEqual(-1);
  });
});
