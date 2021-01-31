import parseF from '.';

describe('parseF', () => {
  it('should parse string to float', () => {
    expect.assertions(2);

    expect(parseF('1')).toStrictEqual(1.0);
    expect(parseF('A')).toBeNull();
  });
});
