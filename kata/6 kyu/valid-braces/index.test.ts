import validBraces from '.';

describe('validBraces', () => {
  it('should validate braces', () => {
    expect.assertions(2);

    expect(validBraces('()')).toStrictEqual(true);
    expect(validBraces('[(])')).toStrictEqual(false);
  });
});
