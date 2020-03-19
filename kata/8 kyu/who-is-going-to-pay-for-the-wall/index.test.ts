import whoIsPaying from '.';

describe('whoIsPaying', () => {
  it('should truncate string to max two letters', () => {
    expect.assertions(6);

    expect(whoIsPaying('Mexico')).toStrictEqual(['Mexico', 'Me']);
    expect(whoIsPaying('Melania')).toStrictEqual(['Melania', 'Me']);
    expect(whoIsPaying('Melissa')).toStrictEqual(['Melissa', 'Me']);
    expect(whoIsPaying('Me')).toStrictEqual(['Me']);
    expect(whoIsPaying('')).toStrictEqual(['']);
    expect(whoIsPaying('I')).toStrictEqual(['I']);
  });
});
