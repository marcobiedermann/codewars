import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import potatoes from './index.ts';

describe('potatoes', () => {
  it('should return final weight coming out of the oven', () => {
    assert.strictEqual(potatoes(82, 127, 80), 114);
    assert.strictEqual(potatoes(93, 129, 91), 100);
  });
});
