import alphanumeric from '.';

describe('alphanumeric', () => {
  it('should validate if the string is alphanumeric', () => {
    expect.assertions(4);

    expect(alphanumeric('Mazinkaiser')).toBe(true);
    expect(alphanumeric('hello world_')).toBe(false);
    expect(alphanumeric('PassW0rd')).toBe(true);
    expect(alphanumeric('     ')).toBe(false);
  });
});
