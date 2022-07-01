import bouncingBall from '.';

describe('bouncingBall', () => {
  it('should count bounces of ball', () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
  });
});
