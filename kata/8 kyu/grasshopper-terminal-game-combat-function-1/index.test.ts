import combat from '.';

describe('combat', () => {
  it('should calculate health after damage', () => {
    expect(combat(100, 5)).toBe(95);
    expect(combat(92, 8)).toBe(84);
    expect(combat(20, 30)).toBe(0);
  });
});
