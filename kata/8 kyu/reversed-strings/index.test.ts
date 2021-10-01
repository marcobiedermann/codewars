import solution from '.';

describe('solution', () => {
  it('should reverse string', () => {
    expect.assertions(1);

    expect(solution('world')).toBe('dlrow');
  });
});
