import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isVow from './index.ts';

describe('isVow', () => {
  it('should change any character code for vowels to a string', () => {
    assert.deepEqual(
      isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]),
      [118, 'u', 120, 121, 'u', 98, 122, 'a', 120, 106, 104, 116, 113, 114, 113, 120, 106],
    );
    assert.deepEqual(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), [
      'e',
      121,
      110,
      113,
      113,
      103,
      121,
      121,
      'e',
      107,
      103,
    ]);
  });
});
