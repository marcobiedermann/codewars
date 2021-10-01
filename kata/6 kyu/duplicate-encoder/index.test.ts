import duplicateEncode from '.';

describe('duplicateEncode', () => {
  it('should convert string', () => {
    expect.assertions(4);

    expect(duplicateEncode('din')).toBe('(((');
    expect(duplicateEncode('recede')).toBe('()()()');
    expect(duplicateEncode('Success')).toBe(')())())');
    expect(duplicateEncode('(( @')).toBe('))((');
  });
});
