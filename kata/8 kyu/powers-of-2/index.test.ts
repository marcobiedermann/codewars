import powersOfTwo from '.';

describe('powersOfTwo', () => {
  it('should return list of all the powers of 2', () => {
    expect(powersOfTwo(0)).toStrictEqual([1]);
    expect(powersOfTwo(1)).toStrictEqual([1, 2]);
    expect(powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16]);
  });
});
