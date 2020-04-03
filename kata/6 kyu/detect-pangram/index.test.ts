import isPangram from '.';

describe('isPangram', () => {
  it('should detect if string is pangram', () => {
    expect.assertions(2);

    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toStrictEqual(true);
    expect(isPangram('This is not a pangram.')).toStrictEqual(false);
  });
});
