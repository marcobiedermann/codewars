import twistedSum from '.';

describe('twistedSum', () => {
  it('should return the sum of the digits of all numbers from 1 to `n`', () => {
    expect.assertions(4);

    expect(twistedSum(3)).toBe(6);
    expect(twistedSum(10)).toBe(46);
    expect(twistedSum(11)).toBe(48);
    expect(twistedSum(12)).toBe(51);
  });
});
