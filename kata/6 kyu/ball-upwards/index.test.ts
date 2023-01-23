import maxBall from '.';

describe('maxBall', () => {
  it('should return the time of the maximum height', () => {
    expect.assertions(4);

    expect(maxBall(37)).toBe(10);
    expect(maxBall(45)).toBe(13);
    expect(maxBall(99)).toBe(28);
    expect(maxBall(85)).toBe(24);
  });
});
