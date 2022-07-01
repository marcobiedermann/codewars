import calculator from '.';

describe('calculator', () => {
  it('should calculate result', () => {
    expect(calculator(1, 2, '+')).toBe(3);
    expect(calculator(1, 2, '-')).toStrictEqual(-1);
    expect(calculator(3, 5, '*')).toBe(15);
    expect(calculator(6, 2, '/')).toBe(3);
    expect(calculator(6, 2, '$')).toBe('unknown value');
    expect(calculator(6, 'h', '*')).toBe('unknown value');
  });
});
