import removeChar from '.';

describe('removeChar', () => {
  it('should remove the first and last character from string', () => {
    expect.assertions(5);

    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
    expect(removeChar('ooopsss')).toBe('oopss');
  });
});
