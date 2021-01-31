import finalGrade from '.';

describe('finalGrade', () => {
  it('should calculate final grade', () => {
    expect.assertions(4);

    expect(finalGrade(100, 12)).toStrictEqual(100);
    expect(finalGrade(85, 5)).toStrictEqual(90);
    expect(finalGrade(55, 3)).toStrictEqual(75);
    expect(finalGrade(55, 0)).toStrictEqual(0);
  });
});
