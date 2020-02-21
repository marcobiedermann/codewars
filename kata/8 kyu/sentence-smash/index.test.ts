import smash from '.';

describe('smash', () => {
  it('should smash words together', () => {
    expect.assertions(2);

    expect(smash(['hello'])).toStrictEqual('hello');
    expect(smash(['hello', 'world'])).toStrictEqual('hello world');
  });
});
