import remove from '.';

describe('remove', () => {
  it('should all exclamation marks from the end of sentence', () => {
    expect.assertions(6);

    expect(remove('Hi!')).toStrictEqual('Hi');
    expect(remove('Hi!!!')).toStrictEqual('Hi');
    expect(remove('!Hi')).toStrictEqual('!Hi');
    expect(remove('!Hi!')).toStrictEqual('!Hi');
    expect(remove('Hi! Hi!')).toStrictEqual('Hi! Hi');
    expect(remove('Hi')).toStrictEqual('Hi');
  });
});
