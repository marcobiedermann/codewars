import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import triangular from './index.ts';

describe('triangular', () => {
  it('should return triangular number', () => {
    assert.strictEqual(triangular(2), 3);
    assert.strictEqual(triangular(4), 10);
    assert.strictEqual(triangular(-10), 0);
  });
});
