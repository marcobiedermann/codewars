import encode from '.';

describe('encode', () => {
  it('should encode string', () => {
    expect(encode('scout', 1939)).toStrictEqual([20, 12, 18, 30, 21]);
    expect(encode('masterpiece', 1939)).toStrictEqual([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
  });
});
