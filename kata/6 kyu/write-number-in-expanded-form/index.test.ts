import expandedForm from '.';

describe('expandedForm', () => {
  it('should return number in expanded form', () => {
    expect.assertions(3);

    expect(expandedForm(12)).toBe('10 + 2');
    expect(expandedForm(42)).toBe('40 + 2');
    expect(expandedForm(70304)).toBe('70000 + 300 + 4');
  });
});
