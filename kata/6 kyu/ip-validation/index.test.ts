import isValidIP from '.';

describe('isValidIP', () => {
  it('should check if IP is valid', () => {
    expect.assertions(17);

    expect(isValidIP('0.0.0.0')).toStrictEqual(true);
    expect(isValidIP('12.255.56.1')).toStrictEqual(true);
    expect(isValidIP('137.255.156.100')).toStrictEqual(true);

    expect(isValidIP('')).toStrictEqual(false);
    expect(isValidIP('abc.def.ghi.jkl')).toStrictEqual(false);
    expect(isValidIP('123.456.789.0')).toStrictEqual(false);
    expect(isValidIP('12.34.56')).toStrictEqual(false);
    expect(isValidIP('01.02.03.04')).toStrictEqual(false);
    expect(isValidIP('256.1.2.3')).toStrictEqual(false);
    expect(isValidIP('1.2.3.4.5')).toStrictEqual(false);
    expect(isValidIP('123,45,67,89')).toStrictEqual(false);
    expect(isValidIP('1e0.1e1.1e2.2e2')).toStrictEqual(false);
    expect(isValidIP(' 1.2.3.4')).toStrictEqual(false);
    expect(isValidIP('1.2.3.4 ')).toStrictEqual(false);
    expect(isValidIP('12.34.56.-7')).toStrictEqual(false);
    expect(isValidIP('1.2.3.4\n')).toStrictEqual(false);
    expect(isValidIP('\n1.2.3.4')).toStrictEqual(false);
  });
});
