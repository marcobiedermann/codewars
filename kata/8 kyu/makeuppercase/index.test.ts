import makeUpperCase from '.';

describe('makeUpperCase', () => {
  it('should transform string to uppercase', () => {
    expect.assertions(1);

    expect(makeUpperCase('hello')).toStrictEqual('HELLO');
  });
});
