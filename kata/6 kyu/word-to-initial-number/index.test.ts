import convert from '.';

describe('convert', () => {
  it('should convert the word to number', () => {
    expect.assertions(2);

    expect(convert('CodeWars')).toBe(10234567);
    expect(convert('KATA')).toBe(1020);
  });
});
