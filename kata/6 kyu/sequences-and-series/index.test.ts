import getScore from '.';

describe('getScore', () => {
  it('should return the score for any positive number', () => {
    expect.assertions(5);

    expect(getScore(1)).toBe(50);
    expect(getScore(2)).toBe(150);
    expect(getScore(3)).toBe(300);
    expect(getScore(4)).toBe(500);
    expect(getScore(5)).toBe(750);
  });
});
