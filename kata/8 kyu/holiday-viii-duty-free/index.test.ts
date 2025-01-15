import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dutyFree from './index.ts';

describe('dutyFree', () => {
  it('should calculate bottles needed to cover cost of the holiday', () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);
  });
});
