import calculator from '.';

describe('calculator', () => {
  it('should calculate result', () => {
    expect.assertions(6);

    expect(calculator(1, 2, '+')).toStrictEqual(3);
    expect(calculator(1, 2, '-')).toStrictEqual(-1);
    expect(calculator(3, 5, '*')).toStrictEqual(15);
    expect(calculator(6, 2, '/')).toStrictEqual(3);
    expect(calculator(6, 2, '$')).toStrictEqual('unknown value');
    expect(calculator(6, 'h', '*')).toStrictEqual('unknown value');
  });
});
