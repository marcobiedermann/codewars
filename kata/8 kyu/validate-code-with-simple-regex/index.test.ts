import validateCode from '.';

describe('validateCode', () => {
  it('should check if the code begins with `1`, `2` or `3`', () => {
    expect.assertions(5);

    expect(validateCode(123)).toBe(true);
    expect(validateCode(248)).toBe(true);
    expect(validateCode(8)).toBe(false);
    expect(validateCode(321)).toBe(true);
    expect(validateCode(9453)).toBe(false);
  });
});
