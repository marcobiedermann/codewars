/* eslint-disable camelcase */

import even_or_odd from '.';

describe('even_or_odd', () => {
  it('should return `Even` for even numbers and `Odd` for odd numbers', () => {
    expect(even_or_odd(2)).toBe('Even');
    expect(even_or_odd(7)).toBe('Odd');
    expect(even_or_odd(-42)).toBe('Even');
    expect(even_or_odd(-7)).toBe('Odd');
    expect(even_or_odd(0)).toBe('Even');
  });
});
