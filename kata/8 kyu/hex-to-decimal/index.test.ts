import hexToDec from '.';

describe('hexToDec', () => {
  it('should convert hex to decimal', () => {
    expect.assertions(5);

    expect(hexToDec('1')).toBe(1);
    expect(hexToDec('a')).toBe(10);
    expect(hexToDec('10')).toBe(16);
    expect(hexToDec('FF')).toBe(255);
    expect(hexToDec('-C')).toBe(-12);
  });
});
