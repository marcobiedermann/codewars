import solution from '.';

describe('solution', () => {
  it('should break up camel casing using a space between', () => {
    expect.assertions(2);

    expect(solution('camelCasing')).toBe('camel Casing');
    expect(solution('camelCasingTest')).toBe('camel Casing Test');
  });
});
