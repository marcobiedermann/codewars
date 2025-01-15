import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isSortedAndHow from './index.ts';

describe('isSortedAndHow', () => {
  it('should return sorting order', () => {
    assert.strictEqual(isSortedAndHow([1, 2]), 'yes, ascending');
    assert.strictEqual(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
    assert.strictEqual(isSortedAndHow([4, 2, 30]), 'no');
  });
});
