import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isTriangle from './index.ts';

describe('isTriangle', () => {
  it('should check if triangle is valid', () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
