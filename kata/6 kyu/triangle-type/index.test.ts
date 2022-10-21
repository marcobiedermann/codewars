import triangleType from '.';

describe('triangleType', () => {
  it('should return the triangle type', () => {
    expect.assertions(5);

    expect(triangleType(7, 3, 2)).toBe(0);
    expect(triangleType(2, 4, 6)).toBe(0);
    expect(triangleType(8, 5, 7)).toBe(1);
    expect(triangleType(3, 4, 5)).toBe(2);
    expect(triangleType(7, 12, 8)).toBe(3);
  });
});
