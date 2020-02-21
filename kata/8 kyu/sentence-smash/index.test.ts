import smash from '.';

describe('smash', () => {
  it('should smash words together', () => {
    expect(smash(['hello'])).toEqual('hello');
    expect(smash(['hello', 'world'])).toEqual('hello world');
  });
});
