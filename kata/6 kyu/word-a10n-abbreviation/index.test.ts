import abbreviate from '.';

describe('abbreviate', () => {
  it('should turn words into an abbreviation', () => {
    expect.assertions(4);

    expect(abbreviate('internationalization')).toStrictEqual('i18n');
    expect(abbreviate('accessibility')).toStrictEqual('a11y');
    expect(abbreviate('Accessibility')).toStrictEqual('A11y');
    expect(abbreviate('elephant-ride')).toStrictEqual('e6t-r2e');
  });
});
