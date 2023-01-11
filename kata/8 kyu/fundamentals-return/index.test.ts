import { add, divide, exponent, mod, multiply, subt } from '.';

describe('calculate', () => {
  it('should calculate result', () => {
    expect.assertions(6);

    expect(add(1, 2)).toBe(3);
    expect(multiply(1, 2)).toBe(2);
    expect(divide(2, 1)).toBe(2);
    expect(mod(1, 2)).toBe(1);
    expect(exponent(1, 2)).toBe(1);
    expect(subt(1, 2)).toBe(-1);
  });
});
