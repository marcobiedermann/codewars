import digit from '.';

describe('digit', () => {
  it('should check if value is digit', () => {
    expect.assertions(6);

    expect(digit('')).toStrictEqual(false);
    expect(digit('7')).toStrictEqual(true);
    expect(digit(' ')).toStrictEqual(false);
    expect(digit('a')).toStrictEqual(false);
    expect(digit('a5')).toStrictEqual(false);
    expect(digit('14')).toStrictEqual(false);
  });
});
