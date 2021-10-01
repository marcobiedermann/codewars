import quarterOf from '.';

describe('quarterOf', () => {
  it('should return the quarter of month', () => {
    expect.assertions(3);

    expect(quarterOf(3)).toBe(1);
    expect(quarterOf(8)).toBe(3);
    expect(quarterOf(11)).toBe(4);
  });
});
