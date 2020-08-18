import differenceInAges from '.';

describe('differenceInAges', () => {
  it('should find the difference in age between oldest and youngest', () => {
    expect.assertions(2);

    expect(differenceInAges([82, 15, 6, 38, 35])).toStrictEqual([6, 82, 76]);
    expect(differenceInAges([57, 99, 14, 32])).toStrictEqual([14, 99, 85]);
  });
});
