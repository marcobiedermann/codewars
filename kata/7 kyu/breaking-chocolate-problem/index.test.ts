import breakChocolate from '.';

describe('breakChocolate', () => {
  it('should return the minimum number of breaks needed to split the chocolate bar', () => {
    expect.assertions(2);

    expect(breakChocolate(5, 5)).toBe(24);
    expect(breakChocolate(1, 1)).toBe(0);
  });
});
