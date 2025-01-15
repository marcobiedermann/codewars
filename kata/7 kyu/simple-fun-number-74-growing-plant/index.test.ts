import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import growingPlant from './index.ts';

describe('growingPlant', () => {
  it('should return days needed to reach desired height', () => {
    assert.strictEqual(growingPlant(100, 10, 910), 10);
    assert.strictEqual(growingPlant(10, 9, 4), 1);
  });
});
