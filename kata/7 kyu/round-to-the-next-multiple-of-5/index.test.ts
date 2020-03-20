import roundToNext5 from '.';

describe('roundToNext5', () => {
  it('should round to the next multiple of 5', () => {
    expect.assertions(6);

    expect(roundToNext5(0)).toStrictEqual(0);
    expect(roundToNext5(1)).toStrictEqual(5);
    expect(roundToNext5(3)).toStrictEqual(5);
    expect(roundToNext5(5)).toStrictEqual(5);
    expect(roundToNext5(7)).toStrictEqual(10);
    expect(roundToNext5(39)).toStrictEqual(40);
  });
});
