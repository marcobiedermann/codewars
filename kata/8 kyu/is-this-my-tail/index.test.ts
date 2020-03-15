import correctTail from '.';

describe('assertEquals', () => {
  it('should check if character is last in string', () => {
    expect.assertions(3);

    expect(correctTail('Fox', 'x')).toStrictEqual(true);
    expect(correctTail('Rhino', 'o')).toStrictEqual(true);
    expect(correctTail('Meerkat', 't')).toStrictEqual(true);
  });
});
