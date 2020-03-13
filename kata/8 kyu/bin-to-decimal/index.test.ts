import binToDec from '.';

describe('binToDec', () => {
  it('should convert binary to decimal number', () => {
    expect.assertions(3);

    expect(binToDec('1')).toStrictEqual(1);
    expect(binToDec('0')).toStrictEqual(0);
    expect(binToDec('1001001')).toStrictEqual(73);
  });
});
