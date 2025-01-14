import { describe, expect, it } from 'vitest';
import booleanToString from './index.ts';

describe('booleanToString', () => {
  it('should convert boolean to string', () => {
    expect.assertions(2);

    expect(booleanToString(true)).toBe('true');
    expect(booleanToString(false)).toBe('false');
  });
});
