import circleArea from '.';

describe('circleArea', () => {
  it('should calculate the area of a circle with the given radius', () => {
    expect.assertions(5);

    expect(circleArea(-1485.86)).toBe(false);
    expect(circleArea(0)).toBe(false);
    expect(circleArea(43.2673)).toBe(5881.25);
    expect(circleArea(68)).toBe(14526.72);
    expect(circleArea('number')).toBe(false);
  });
});
