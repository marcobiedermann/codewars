import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nbYear from './index.ts';

describe('nbYear', () => {
  it('should get years to reach population', () => {
    assert.strictEqual(nbYear(1500, 5, 100, 5000), 15);
    assert.strictEqual(nbYear(1500000, 2.5, 10000, 2000000), 10);
    assert.strictEqual(nbYear(1500000, 0.25, 1000, 2000000), 94);
  });
});
