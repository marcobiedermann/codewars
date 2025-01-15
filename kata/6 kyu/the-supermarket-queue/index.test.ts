import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import queueTime from './index.ts';

describe('queueTime', () => {
  it('should calculate total time of queues', () => {
    assert.strictEqual(queueTime([], 1), 0);
    assert.strictEqual(queueTime([1, 2, 3, 4], 1), 10);
    assert.strictEqual(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
    assert.strictEqual(queueTime([1, 2, 3, 4, 5], 100), 5);
    assert.strictEqual(queueTime([], -1), 0);
  });
});
