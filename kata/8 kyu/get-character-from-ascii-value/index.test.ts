import getChar from '.';

describe('getChar', () => {
  it('should return ASCII char of value', () => {
    expect(getChar(55)).toBe('7');
    expect(getChar(56)).toBe('8');
    expect(getChar(57)).toBe('9');
    expect(getChar(58)).toBe(':');
    expect(getChar(59)).toBe(';');
    expect(getChar(60)).toBe('<');
    expect(getChar(61)).toBe('=');
    expect(getChar(62)).toBe('>');
    expect(getChar(63)).toBe('?');
    expect(getChar(64)).toBe('@');
    expect(getChar(65)).toBe('A');
  });
});
