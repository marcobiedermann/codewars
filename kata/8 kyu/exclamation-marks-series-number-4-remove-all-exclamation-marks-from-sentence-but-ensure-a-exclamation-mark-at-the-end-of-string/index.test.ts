import remove from '.';

describe('remove', () => {
  it('should remove all exclamation marks from sentence but ensure a exclamation mark at the end of string', () => {
    expect.assertions(6);

    expect(remove('Hi!')).toStrictEqual('Hi!');
    expect(remove('Hi!!!')).toStrictEqual('Hi!');
    expect(remove('!Hi')).toStrictEqual('Hi!');
    expect(remove('!Hi!')).toStrictEqual('Hi!');
    expect(remove('Hi! Hi!')).toStrictEqual('Hi Hi!');
    expect(remove('Hi')).toStrictEqual('Hi!');
  });
});
