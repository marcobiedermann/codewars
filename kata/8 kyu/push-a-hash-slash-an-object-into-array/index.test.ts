import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import items from './index.ts';

describe('items', () => {
  it('should push an object into an array', () => {
    assert.notDeepEqual(items, []);
    assert.strictEqual(items.length, 1);
    assert.deepEqual(items, [{ a: 'b', c: 'd' }]);
  });
});
