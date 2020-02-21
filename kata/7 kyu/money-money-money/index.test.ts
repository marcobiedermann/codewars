import calculateYears from '.';

describe('calculateYears', () => {
  it('should calculate years to reach investment', () => {
    expect(calculateYears(1000, 0.05, 0.18, 1100)).toEqual(3);
    expect(calculateYears(1000, 0.01625, 0.18, 1200)).toEqual(14);
    expect(calculateYears(1000, 0.05, 0.18, 1000)).toEqual(0);
  });
});
