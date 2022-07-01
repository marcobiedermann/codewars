import duplicateEncode from '.';

describe('duplicateEncode', () => {
  it('should convert string', () => {
    expect(duplicateEncode('din')).toBe('(((');
    expect(duplicateEncode('recede')).toBe('()()()');
    expect(duplicateEncode('Success')).toBe(')())())');
    expect(duplicateEncode('(( @')).toBe('))((');
  });
});
