import isPangram from '.';

describe('isPangram', () => {
  it('should detect if string is pangram', () => {
    expect.assertions(2);

    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true);
    expect(isPangram('This is not a pangram.')).toBe(false);
  });
});
