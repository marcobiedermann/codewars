import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import comp from './index.ts';

describe('comp', () => {
  it('should check if both array are the same with the same multiplicities', () => {
    assert.strictEqual(
      comp(
        [121, 144, 19, 161, 19, 144, 19, 11],
        [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      ),
      true,
    );
    assert.strictEqual(comp(null, [1]), false);
    assert.strictEqual(comp([1], null), false);
  });
});
