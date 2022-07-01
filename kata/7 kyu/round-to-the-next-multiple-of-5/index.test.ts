import roundToNext5 from '.';

describe('roundToNext5', () => {
  it('should round to the next multiple of 5', () => {
    expect(roundToNext5(0)).toBe(0);
    expect(roundToNext5(1)).toBe(5);
    expect(roundToNext5(3)).toBe(5);
    expect(roundToNext5(5)).toBe(5);
    expect(roundToNext5(7)).toBe(10);
    expect(roundToNext5(39)).toBe(40);
  });
});
