import shortcut from '.';

describe('shortcut', () => {
  it('should remove all lowercase vowels from string', () => {
    expect.assertions(4);

    expect(shortcut('hello')).toBe('hll');
    expect(shortcut('how are you today?')).toBe('hw r y tdy?');
    expect(shortcut('complain')).toBe('cmpln');
    expect(shortcut('never')).toBe('nvr');
  });
});
