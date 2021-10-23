import summation from '.';

describe('summation', () => {
  it('should return the summation of every number from 1 to `n`', () => {
    expect.assertions(2);

    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);
  });
});
