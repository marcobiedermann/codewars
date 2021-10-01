import triangular from '.';

describe('triangular', () => {
  it('should return triangular number', () => {
    expect.assertions(3);

    expect(triangular(2)).toBe(3);
    expect(triangular(4)).toBe(10);
    expect(triangular(-10)).toBe(0);
  });
});
