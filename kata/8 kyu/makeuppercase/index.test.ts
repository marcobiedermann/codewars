import makeUpperCase from '.';

describe('makeUpperCase', () => {
  it('should transform string to uppercase', () => {
    expect(makeUpperCase('hello')).toEqual('HELLO');
  });
});
