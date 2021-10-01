import abbreviate from '.';

describe('abbreviate', () => {
  it('should turn words into an abbreviation', () => {
    expect.assertions(4);

    expect(abbreviate('internationalization')).toBe('i18n');
    expect(abbreviate('accessibility')).toBe('a11y');
    expect(abbreviate('Accessibility')).toBe('A11y');
    expect(abbreviate('elephant-ride')).toBe('e6t-r2e');
  });
});
