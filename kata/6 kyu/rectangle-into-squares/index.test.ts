import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sqInRect from './index.ts';

describe('sqInRect', () => {
  it('should return number of squares in rect', () => {
    assert.strictEqual(sqInRect(5, 5), null);
    assert.deepEqual(sqInRect(5, 3), [3, 2, 1, 1]);
    assert.deepEqual(sqInRect(3, 5), [3, 2, 1, 1]);
    assert.deepEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
  });
});
