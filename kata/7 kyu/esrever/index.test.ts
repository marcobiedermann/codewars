import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverse from './index.ts';

describe('reverse', () => {
  it('should reverse a list', () => {
    assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
    assert.deepEqual(reverse([1, null, 14, 'two']), ['two', 14, null, 1]);
  });
});
