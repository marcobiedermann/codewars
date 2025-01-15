import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import past from './index.ts';

describe('past', () => {
  it('should convert time to milliseconds', () => {
    assert.strictEqual(past(0, 1, 1), 61000);
    assert.strictEqual(past(1, 1, 1), 3661000);
    assert.strictEqual(past(0, 0, 0), 0);
    assert.strictEqual(past(1, 0, 1), 3601000);
    assert.strictEqual(past(1, 0, 0), 3600000);
  });
});
