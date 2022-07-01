import solution from '.';

describe('solution', () => {
  it('should check if string end with', () => {
    expect(solution('abcde', 'cde')).toBe(true);
    expect(solution('abcde', 'abc')).toBe(false);
  });
});
