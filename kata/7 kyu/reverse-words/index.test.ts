import reverseWords from '.';

describe('reverseWords', () => {
  it('should reverse each word in string', () => {
    expect.assertions(4);

    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toStrictEqual(
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    );
    expect(reverseWords('apple')).toStrictEqual('elppa');
    expect(reverseWords('a b c d')).toStrictEqual('a b c d');
    expect(reverseWords('double  spaced  words')).toStrictEqual('elbuod  decaps  sdrow');
  });
});
