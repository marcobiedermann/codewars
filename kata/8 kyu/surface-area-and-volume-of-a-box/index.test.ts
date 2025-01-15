import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getSize from './index.ts';

describe('getSize', () => {
  it('should return area and volume of box', () => {
    assert.strictEqual(getSize(4, 2, 6)[1], 48);
    assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    assert.strictEqual(getSize(4, 2, 6)[0], 88);
    assert.strictEqual(getSize(4, 2, 6)[1], 48);
  });
});
