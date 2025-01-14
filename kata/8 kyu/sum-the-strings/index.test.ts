import { describe, expect, it } from 'vitest';
import sumStr from './index.ts';

describe('sumStr', () => {
  it('should add two numbers in form of a string', () => {
    expect.assertions(2);

    expect(sumStr('4', '5')).toBe('9');
    expect(sumStr('34', '5')).toBe('39');
  });
});
