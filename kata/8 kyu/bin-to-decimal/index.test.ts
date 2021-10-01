import binToDec from '.';

describe('binToDec', () => {
  it('should convert binary to decimal number', () => {
    expect.assertions(3);

    expect(binToDec('1')).toBe(1);
    expect(binToDec('0')).toBe(0);
    expect(binToDec('1001001')).toBe(73);
  });
});
