import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxBall from './index.ts';

describe('maxBall', () => {
  it('should return the time of the maximum height', () => {
    assert.strictEqual(maxBall(37), 10);
    assert.strictEqual(maxBall(45), 13);
    assert.strictEqual(maxBall(99), 28);
    assert.strictEqual(maxBall(85), 24);
  });
});
