import narcissistic from '.';

describe('narcissistic', () => {
  it('should find small numbers are all narcissistic', () => {
    expect(narcissistic(7)).toBe(true);
  });

  it('should find these numbers are narcissistic', () => {
    expect(narcissistic(371)).toBe(true);
  });
});
