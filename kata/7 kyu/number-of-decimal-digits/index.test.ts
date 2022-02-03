import digits from '.';

describe('digits', () => {
  it('should count the number of digits in number', () => {
    expect.assertions(3);

    expect(digits(5)).toBe(1);
    expect(digits(12345)).toBe(5);
    expect(digits(9876543210)).toBe(10);
  });
});
