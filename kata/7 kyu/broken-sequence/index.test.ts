import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findMissingNumber from './index.ts';

describe('findMissingNumber', () => {
  it('should find missing number in sequence', () => {
    assert.strictEqual(findMissingNumber('1 2 3 5'), 4);
    assert.strictEqual(findMissingNumber('1 3'), 2);
    assert.strictEqual(findMissingNumber('1 5'), 2);
    assert.strictEqual(findMissingNumber(''), 0);
    assert.strictEqual(findMissingNumber('1 2 3 4 5'), 0);
    assert.strictEqual(findMissingNumber('2 3 4 5'), 1);
    assert.strictEqual(findMissingNumber('2 6 4 5 3'), 1);
    assert.strictEqual(findMissingNumber('2 1 4 3 a'), 1);
  });
});
