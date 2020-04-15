import camelCase from '.';

describe('camelCase', () => {
  it('should camelcase each word in sentence', () => {
    expect.assertions(5);

    expect(camelCase('test case')).toStrictEqual('TestCase');
    expect(camelCase('camel case method')).toStrictEqual('CamelCaseMethod');
    expect(camelCase('say hello ')).toStrictEqual('SayHello');
    expect(camelCase(' camel case word')).toStrictEqual('CamelCaseWord');
    expect(camelCase('')).toStrictEqual('');
  });
});
