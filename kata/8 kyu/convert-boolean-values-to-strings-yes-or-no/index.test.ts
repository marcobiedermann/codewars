import boolToWord from '.';

describe('boolToWord', () => {
  it('should convert boolean to word', () => {
    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(false)).toBe('No');
  });
});
