import getRealFloor from '.';

describe('getRealFloor', () => {
  it('should return the floor in the european system', () => {
    expect(getRealFloor(0)).toBe(0);
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(15)).toBe(13);
  });
});
