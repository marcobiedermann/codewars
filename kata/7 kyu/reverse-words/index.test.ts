import { describe, expect, it } from 'vitest';
import reverseWords from '.';

describe('reverseWords', () => {
  it('should reverse each word in string', () => {
    expect.assertions(4);

    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    );
    expect(reverseWords('apple')).toBe('elppa');
    expect(reverseWords('a b c d')).toBe('a b c d');
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow');
  });
});
