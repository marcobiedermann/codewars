import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findMissingLetter from './index.ts';

describe('findMissingLetter', () => {
  it('should find the missing letter', () => {
    assert.strictEqual(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    assert.strictEqual(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
    assert.strictEqual(findMissingLetter(['z']), undefined);
  });
});
