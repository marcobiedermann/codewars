import remove from '.';

describe('remove', () => {
  it('should all exclamation marks from the end of sentence', () => {
    expect(remove('Hi!')).toBe('Hi');
    expect(remove('Hi!!!')).toBe('Hi');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('!Hi!')).toBe('!Hi');
    expect(remove('Hi! Hi!')).toBe('Hi! Hi');
    expect(remove('Hi')).toBe('Hi');
  });
});
