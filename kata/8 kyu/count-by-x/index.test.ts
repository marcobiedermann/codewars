import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countBy from './index.ts';

describe('countBy', () => {
  it('should return array of multiples', () => {
    assert.deepEqual(countBy(1, 5), [1, 2, 3, 4, 5]);
    assert.deepEqual(countBy(2, 5), [2, 4, 6, 8, 10]);
  });
});
