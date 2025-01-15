import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseList from './index.ts';

describe('reverseList', () => {
  it('should reverse array', () => {
    assert.deepEqual(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);
  });
});
