import guess from '.';

describe('guess', () => {
  it('should', () => {
    expect.assertions(1);

    const luckyNumber = Math.floor(Math.random() * 100 + 1);

    expect(guess).toBe(luckyNumber);
  });
});
