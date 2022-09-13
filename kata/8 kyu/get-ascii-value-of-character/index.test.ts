import getASCII from '.';

describe('getASCII', () => {
  it('should return the ASCII code of a character', () => {
    expect.assertions(3);

    expect(getASCII('A')).toBe(65);
    expect(getASCII(' ')).toBe(32);
    expect(getASCII('!')).toBe(33);
  });
});
