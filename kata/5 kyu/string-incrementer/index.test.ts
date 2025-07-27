import incrementString from '.';

describe('incrementString', () => {
  it('should increment number in string', () => {
    expect.assertions(6);

    expect(incrementString('foobar000')).toBe('foobar001');
    expect(incrementString('foo')).toBe('foo1');
    expect(incrementString('foobar001')).toBe('foobar002');
    expect(incrementString('foobar99')).toBe('foobar100');
    expect(incrementString('foobar099')).toBe('foobar100');
    expect(incrementString('')).toBe('1');
  });
});
