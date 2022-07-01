import finalGrade from '.';

describe('finalGrade', () => {
  it('should calculate final grade', () => {
    expect(finalGrade(100, 12)).toBe(100);
    expect(finalGrade(85, 5)).toBe(90);
    expect(finalGrade(55, 3)).toBe(75);
    expect(finalGrade(55, 0)).toBe(0);
  });
});
