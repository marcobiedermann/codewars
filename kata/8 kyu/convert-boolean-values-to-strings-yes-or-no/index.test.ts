import { describe, expect, it } from 'vitest';
import boolToWord from '.';

describe('boolToWord', () => {
  it('should convert boolean to word', () => {
    expect.assertions(2);

    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(false)).toBe('No');
  });
});
