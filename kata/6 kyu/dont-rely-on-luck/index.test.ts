import guess from '.';

describe('guess', () => {
  it('should', () => {
    const luckyNumber = Math.floor(Math.random() * 100 + 1);

    expect(guess).toBe(luckyNumber);
  });
});
