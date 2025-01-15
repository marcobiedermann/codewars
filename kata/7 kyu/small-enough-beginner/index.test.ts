import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import smallEnough from './index.ts';

describe('smallEnough', () => {
  it('should check if all values are below or equal to the limit', () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
  });
});
