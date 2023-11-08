import { describe, expect, it } from 'vitest';
import calc from '.';

describe('calc', () => {
  it('should calculate the diff of its ascii representation', () => {
    expect.assertions(5);

    expect(calc('abcdef')).toBe(6);
    expect(calc('ifkhchlhfd')).toBe(6);
    expect(calc('aaaaaddddr')).toBe(30);
    expect(calc('jfmgklf8hglbe')).toBe(6);
    expect(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(96);
  });
});
