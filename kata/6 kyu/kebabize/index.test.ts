import kebabize from '.';

describe('kebabize', () => {
  it('should convert a camel case string into a kebab case', () => {
    expect.assertions(2);

    expect(kebabize('myCamelCasedString')).toBe('my-camel-cased-string');
    expect(kebabize('myCamelHas3Humps')).toBe('my-camel-has-humps');
  });
});
