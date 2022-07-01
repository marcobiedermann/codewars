import remove from '.';

describe('remove', () => {
  it('should remove all exclamation marks from sentence but ensure a exclamation mark at the end of string', () => {
    expect(remove('Hi!')).toBe('Hi!');
    expect(remove('Hi!!!')).toBe('Hi!');
    expect(remove('!Hi')).toBe('Hi!');
    expect(remove('!Hi!')).toBe('Hi!');
    expect(remove('Hi! Hi!')).toBe('Hi Hi!');
    expect(remove('Hi')).toBe('Hi!');
  });
});
