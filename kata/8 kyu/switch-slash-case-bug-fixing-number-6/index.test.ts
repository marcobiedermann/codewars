import evalObject from '.';

describe('evalObject', () => {
  it('should calculate the result', () => {
    expect.assertions(7);

    expect(evalObject({ a: 1, b: 1, operation: '+' })).toBe(2);
    expect(evalObject({ a: 1, b: 1, operation: '-' })).toBe(0);
    expect(evalObject({ a: 1, b: 1, operation: '/' })).toBe(1);
    expect(evalObject({ a: 1, b: 1, operation: '*' })).toBe(1);
    expect(evalObject({ a: 1, b: 1, operation: '%' })).toBe(0);
    expect(evalObject({ a: 1, b: 1, operation: '^' })).toBe(1);
    expect(() => evalObject({ a: 1, b: 1, operation: '.' })).toThrow('Unsupported Operator');
  });
});
