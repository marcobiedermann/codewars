import dutyFree from '.';

describe('dutyFree', () => {
  it('should calculate bottles needed to cover cost of the holiday', () => {
    expect(dutyFree(12, 50, 1000)).toBe(166);
    expect(dutyFree(17, 10, 500)).toBe(294);
    expect(dutyFree(24, 35, 3000)).toBe(357);
  });
});
