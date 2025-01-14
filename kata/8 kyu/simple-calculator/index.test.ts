import { describe, expect, it } from 'vitest';
import calculator from './index.ts';

describe('calculator', () => {
  it('should calculate result', () => {
    expect.assertions(6);

    expect(calculator(1, 2, '+')).toBe(3);
    expect(calculator(1, 2, '-')).toBe(-1);
    expect(calculator(3, 5, '*')).toBe(15);
    expect(calculator(6, 2, '/')).toBe(3);
    expect(calculator(6, 2, '$')).toBe('unknown value');
    expect(calculator(6, 'h', '*')).toBe('unknown value');
  });
});
