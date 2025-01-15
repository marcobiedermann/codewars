import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twoSum from './index.ts';

describe('twoSum', () => {
  it('should', () => {
    assert.deepEqual(twoSum([1, 2, 3], 4), [0, 2]);
    assert.deepEqual(twoSum([1234, 5678, 9012], 14690), [1, 2]);
    assert.deepEqual(twoSum([2, 2, 3], 4), [0, 1]);
    assert.strictEqual(twoSum([1, 1], 3), undefined);
  });
});
