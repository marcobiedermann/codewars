import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cookingTime from './index.ts';

describe('cookingTime', () => {
  it('should calculate the cooking time', () => {
    assert.strictEqual(cookingTime(0), 0);
    assert.strictEqual(cookingTime(5), 5);
    assert.strictEqual(cookingTime(10), 10);
  });
});
