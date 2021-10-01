import derive from '.';

describe('derive', () => {
  it('should take the derivative', () => {
    expect.assertions(2);

    expect(derive(7, 8)).toBe('56x^7');
    expect(derive(5, 9)).toBe('45x^8');
  });
});
