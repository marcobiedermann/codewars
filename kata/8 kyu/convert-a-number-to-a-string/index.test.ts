import { describe, expect, it } from 'vitest';
import numberToString from './index.ts';

describe('numberToString', () => {
  it('should convert number to string', () => {
    expect.assertions(1);

    expect(numberToString(67)).toBe('67');
  });
});
