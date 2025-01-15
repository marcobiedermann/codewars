import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getDivisorsCnt from './index.ts';

describe('getDivisorsCnt', () => {
  it('should count number of divisors', () => {
    assert.strictEqual(getDivisorsCnt(1), 1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
});
