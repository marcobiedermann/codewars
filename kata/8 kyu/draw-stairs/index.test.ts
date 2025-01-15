import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import drawStairs from './index.ts';

describe('drawStairs', () => {
  it('draw stairs with only 1 step', () => {
    assert.strictEqual(drawStairs(1), 'I');
  });

  it('draw stairs with 3 steps', () => {
    assert.strictEqual(drawStairs(3), 'I\n I\n  I');
  });

  it('draw stairs with 5 steps', () => {
    assert.strictEqual(drawStairs(5), 'I\n I\n  I\n   I\n    I');
  });
});
