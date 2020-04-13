import titleCase from '.';

describe('titleCase', () => {
  it('should return string in titlecase', () => {
    expect.assertions(4);

    expect(titleCase('')).toStrictEqual('');
    expect(titleCase('a clash of KINGS', 'a an the of')).toStrictEqual('A Clash of Kings');
    expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toStrictEqual('The Wind in the Willows');
    expect(titleCase('the quick brown fox')).toStrictEqual('The Quick Brown Fox');
  });
});
