import getCount from '.';

describe('getCount', () => {
  it('should count vowels in string', () => {
    expect(getCount('abracadabra')).toBe(5);
  });
});
