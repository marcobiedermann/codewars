import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import newAvg from './index.ts';

describe('newAvg', () => {
  it('should find the missing number to reach the new average', () => {
    assert.strictEqual(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
    assert.strictEqual(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);
    assert.throws(
      () => newAvg([14, 30, 5, 7, 9, 11, 15], 2),
      new Error('Expected New Average is too low'),
    );
  });
});
