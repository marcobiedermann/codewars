import solution from '.';

describe('solution', () => {
  it('should break up camel casing using a space between', () => {
    expect.assertions(2);

    expect(solution('camelCasing')).toStrictEqual('camel Casing');
    expect(solution('camelCasingTest')).toStrictEqual('camel Casing Test');
  });
});
