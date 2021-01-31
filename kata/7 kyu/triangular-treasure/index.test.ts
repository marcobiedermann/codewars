import triangular from '.';

describe('triangular', () => {
  it('should return triangular number', () => {
    expect.assertions(3);

    expect(triangular(2)).toStrictEqual(3);
    expect(triangular(4)).toStrictEqual(10);
    expect(triangular(-10)).toStrictEqual(0);
  });
});
