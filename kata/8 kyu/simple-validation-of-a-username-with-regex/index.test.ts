import validateUsr from '.';

describe('validateUsr', () => {
  it('should validate username', () => {
    expect.assertions(10);

    expect(validateUsr('asddsa')).toStrictEqual(true);
    expect(validateUsr('a')).toStrictEqual(false);
    expect(validateUsr('Hass')).toStrictEqual(false);
    expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toStrictEqual(false);
    expect(validateUsr('')).toStrictEqual(false);
    expect(validateUsr('____')).toStrictEqual(true);
    expect(validateUsr('012')).toStrictEqual(false);
    expect(validateUsr('p1pp1')).toStrictEqual(true);
    expect(validateUsr('asd43 34')).toStrictEqual(false);
    expect(validateUsr('asd43_34')).toStrictEqual(true);
  });
});
