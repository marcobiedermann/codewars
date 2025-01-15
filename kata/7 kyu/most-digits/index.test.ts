import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findLongest from './index.ts';

describe('findLongest', () => {
  it('should find number with most digist', () => {
    assert.strictEqual(findLongest([1, 10, 100]), 100);
    assert.strictEqual(findLongest([9000, 8, 800]), 9000);
    assert.strictEqual(findLongest([8, 900, 500]), 900);
  });
});
