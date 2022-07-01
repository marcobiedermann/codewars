import isTriangle from '.';

describe('isTriangle', () => {
  it('should check if triangle is valid', () => {
    expect(isTriangle(1, 2, 2)).toBe(true);
    expect(isTriangle(7, 2, 2)).toBe(false);
  });
});
