import finalGrade from '.';

describe('finalGrade', () => {
  it('should calculate final grade', () => {
    expect.assertions(2);

    expect(finalGrade(100, 12)).toStrictEqual(100);
    expect(finalGrade(85, 5)).toStrictEqual(90);
  });
});
