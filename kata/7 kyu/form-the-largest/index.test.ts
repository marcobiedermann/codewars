import maxNumber from '.';

describe('maxNumber', () => {
  it('should return maximum number from digitis of number', () => {
    expect.assertions(5);

    expect(maxNumber(213)).toStrictEqual(321);
    expect(maxNumber(7389)).toStrictEqual(9873);
    expect(maxNumber(63792)).toStrictEqual(97632);
    expect(maxNumber(566797)).toStrictEqual(977665);
    expect(maxNumber(1000000)).toStrictEqual(1000000);
  });
});
