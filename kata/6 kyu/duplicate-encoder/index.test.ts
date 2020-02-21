import duplicateEncode from '.';

describe('duplicateEncode', () => {
  it('should convert string', () => {
    expect(duplicateEncode('din')).toEqual('(((');
    expect(duplicateEncode('recede')).toEqual('()()()');
    expect(duplicateEncode('Success')).toEqual(')())())');
    expect(duplicateEncode('(( @')).toEqual('))((');
  });
});
