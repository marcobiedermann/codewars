import { describe, expect, it } from 'vitest';
import formatMoney from '.';

describe('formatMoney', () => {
  it('should form the amount formatting in dollars and cents', () => {
    expect.assertions(1);

    expect(formatMoney(39.99)).toBe('$39.99');
  });
});
