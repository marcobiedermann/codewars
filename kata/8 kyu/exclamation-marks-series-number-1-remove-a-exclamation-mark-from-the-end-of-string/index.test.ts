import remove from '.';

describe('remove', () => {
  it('should remove exclamation mark from the end of string', () => {
    expect(remove('Hi!')).toBe('Hi');
    expect(remove('Hi!!!')).toBe('Hi!!');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('!Hi!')).toBe('!Hi');
    expect(remove('Hi! Hi!')).toBe('Hi! Hi');
    expect(remove('Hi')).toBe('Hi');
  });
});
