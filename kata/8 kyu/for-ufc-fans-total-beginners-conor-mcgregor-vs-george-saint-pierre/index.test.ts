import quote from '.';

describe('quote', () => {
  it('should return winner statement', () => {
    expect.assertions(4);

    expect(quote('george saint pierre')).toBe('I am not impressed by your performance.');
    expect(quote('conor mcgregor')).toBe(
      "I'd like to take this chance to apologize.. To absolutely NOBODY!",
    );
    expect(quote('George Saint Pierre')).toBe('I am not impressed by your performance.');
    expect(quote('Conor McGregor')).toBe(
      "I'd like to take this chance to apologize.. To absolutely NOBODY!",
    );
  });
});
