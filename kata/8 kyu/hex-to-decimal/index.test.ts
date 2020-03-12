import hexToDec from '.';

describe('hexToDec', () => {
  it('should convert hex to decimal', () => {
    expect.assertions(5);

    expect(hexToDec('1')).toStrictEqual(1);
    expect(hexToDec('a')).toStrictEqual(10);
    expect(hexToDec('10')).toStrictEqual(16);
    expect(hexToDec('FF')).toStrictEqual(255);
    expect(hexToDec('-C')).toStrictEqual(-12);
  });
});
