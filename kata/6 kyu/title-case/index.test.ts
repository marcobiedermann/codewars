import titleCase from '.';

describe('titleCase', () => {
  it('should return string in titlecase', () => {
    expect(titleCase('')).toBe('');
    expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings');
    expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe('The Wind in the Willows');
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });
});
