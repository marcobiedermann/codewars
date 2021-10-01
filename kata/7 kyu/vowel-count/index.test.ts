import getCount from '.';

describe('getCount', () => {
  it('should count vowels in string', () => {
    expect.assertions(1);

    expect(getCount('abracadabra')).toBe(5);
  });
});
