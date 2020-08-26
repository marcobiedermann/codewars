import parseF from '.';

describe('parseF', () => {
  it('should parse string to float', () => {
    expect.assertions(1);

    expect(parseF('1')).toStrictEqual(1.0);
  });
});
