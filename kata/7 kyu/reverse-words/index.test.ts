import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseWords from './index.ts';

describe('reverseWords', () => {
  it('should reverse each word in string', () => {
    assert.strictEqual(
      reverseWords('The quick brown fox jumps over the lazy dog.'),
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    );
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
