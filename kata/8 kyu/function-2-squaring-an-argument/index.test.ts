import square from '.';

describe('square', () => {
  it('should return square', () => {
    expect.assertions(1);

    expect(square(3)).toBe(9);
  });
});
