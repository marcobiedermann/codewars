import combineNames from '.';

describe('combineNames', () => {
  it('should combine names', () => {
    expect.assertions(1);

    expect(combineNames('James', 'Stevens')).toBe('James Stevens');
  });
});
