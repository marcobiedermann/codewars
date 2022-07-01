import uniqueInOrder from '.';

describe('uniqueInOrder', () => {
  it('should return unique items in order', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  });
});
