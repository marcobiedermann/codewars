import xor from '.';

describe('xor', () => {
  it('should return `true` if exactly one of the two expressions evaluate to `true`', () => {
    expect.assertions(4);

    expect(xor(false, false)).toStrictEqual(false);
    expect(xor(true, false)).toStrictEqual(true);
    expect(xor(false, true)).toStrictEqual(true);
    expect(xor(true, true)).toStrictEqual(false);
  });
});
