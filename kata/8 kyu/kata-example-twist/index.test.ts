import websites from '.';

describe('websites', () => {
  it('should store the value `codewars` 1000 times', () => {
    expect.assertions(3);

    expect(websites.length).toBeGreaterThan(0);
    expect(websites).toHaveLength(1000);
    expect(websites.every((website) => website === 'codewars')).toBe(true);
  });
});
