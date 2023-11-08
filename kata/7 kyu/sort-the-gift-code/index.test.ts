import { describe, expect, it } from 'vitest';
import sortGiftCode from '.';

describe('sortGiftCode', () => {
  it('should sort letters in string', () => {
    expect.assertions(3);

    expect(sortGiftCode('abcdef')).toBe('abcdef');
    expect(sortGiftCode('pqksuvy')).toBe('kpqsuvy');
    expect(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});
