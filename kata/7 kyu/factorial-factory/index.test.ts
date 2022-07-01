import factorial from '.';

describe('factorial', () => {
  it('should calculate the factorial', () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(5)).toBe(120);
  });
});
