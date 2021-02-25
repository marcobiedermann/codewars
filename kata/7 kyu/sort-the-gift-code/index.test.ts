import sortGiftCode from '.';

describe('sortGiftCode', () => {
  it('should sort letters in string', () => {
    expect.assertions(3);

    expect(sortGiftCode('abcdef')).toStrictEqual('abcdef');
    expect(sortGiftCode('pqksuvy')).toStrictEqual('kpqsuvy');
    expect(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')).toStrictEqual('abcdefghijklmnopqrstuvwxyz');
  });
});
