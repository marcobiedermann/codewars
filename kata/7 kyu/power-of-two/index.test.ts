import isPowerOfTwo from '.';

describe('isPowerOfTwo', () => {
  it('should check if number is a power of two', () => {
    expect.assertions(3);

    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4096)).toBe(true);
    expect(isPowerOfTwo(5)).toBe(false);
  });
});
