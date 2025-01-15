import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import repeats from './index.ts';

describe('repeats', () => {
  it('should sum the numbers that occur only once', () => {
    assert.strictEqual(repeats([4, 5, 7, 5, 4, 8]), 15);
    assert.strictEqual(repeats([9, 10, 19, 13, 19, 13]), 19);
    assert.strictEqual(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
    assert.strictEqual(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
    assert.strictEqual(repeats([5, 10, 19, 13, 10, 13]), 24);
  });
});
