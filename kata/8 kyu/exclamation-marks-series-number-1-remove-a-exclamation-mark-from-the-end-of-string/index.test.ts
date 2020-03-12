import remove from '.';

describe('remove', () => {
  it('should remove exclamation mark from the end of string', () => {
    expect.assertions(6);

    expect(remove('Hi!')).toStrictEqual('Hi');
    expect(remove('Hi!!!')).toStrictEqual('Hi!!');
    expect(remove('!Hi')).toStrictEqual('!Hi');
    expect(remove('!Hi!')).toStrictEqual('!Hi');
    expect(remove('Hi! Hi!')).toStrictEqual('Hi! Hi');
    expect(remove('Hi')).toStrictEqual('Hi');
  });
});
