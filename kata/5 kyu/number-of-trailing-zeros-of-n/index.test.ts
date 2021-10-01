import zeros from '.';

describe('zeros', () => {
  it('should count number of trailing zeros in a factorial of a given number', () => {
    expect.assertions(4);

    expect(zeros(0)).toBe(0);
    expect(zeros(5)).toBe(1);
    expect(zeros(6)).toBe(1);
    expect(zeros(30)).toBe(7);
  });
});
