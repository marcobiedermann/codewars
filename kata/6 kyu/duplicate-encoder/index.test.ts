import duplicateEncode from '.';

describe('duplicateEncode', () => {
  it('should convert string', () => {
    expect.assertions(4);

    expect(duplicateEncode('din')).toStrictEqual('(((');
    expect(duplicateEncode('recede')).toStrictEqual('()()()');
    expect(duplicateEncode('Success')).toStrictEqual(')())())');
    expect(duplicateEncode('(( @')).toStrictEqual('))((');
  });
});
