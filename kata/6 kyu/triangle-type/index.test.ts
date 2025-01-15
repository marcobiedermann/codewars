import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import triangleType from './index.ts';

describe('triangleType', () => {
  it('should return the triangle type', () => {
    assert.strictEqual(triangleType(7, 3, 2), 0);
    assert.strictEqual(triangleType(2, 4, 6), 0);
    assert.strictEqual(triangleType(8, 5, 7), 1);
    assert.strictEqual(triangleType(3, 4, 5), 2);
    assert.strictEqual(triangleType(7, 12, 8), 3);
  });
});
