import growingPlant from '.';

describe('growingPlant', () => {
  it('should return days needed to reach desired height', () => {
    expect(growingPlant(100, 10, 910)).toBe(10);
    expect(growingPlant(10, 9, 4)).toBe(1);
  });
});
