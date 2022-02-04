import websites from '.';

describe('websites', () => {
  it('should contain `codewars` in the array', () => {
    expect.assertions(3);

    expect(websites).toContain('codewars');
    expect(websites).not.toHaveLength(0);
    expect(websites).toHaveLength(1);
  });
});
