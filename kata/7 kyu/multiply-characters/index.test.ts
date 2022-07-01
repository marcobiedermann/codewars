import spam from '.';

describe('spam', () => {
  it('should repeat the word `n` times', () => {
    expect(spam(1)).toBe('hue');
    expect(spam(6)).toBe('huehuehuehuehuehue');
    expect(spam(14)).toBe('huehuehuehuehuehuehuehuehuehuehuehuehuehue');
  });
});
