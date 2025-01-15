import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import move from './index.ts';

describe('move', () => {
  it('should return new position of hero', () => {
    assert.strictEqual(move(0, 4), 8);
    assert.strictEqual(move(3, 6), 15);
    assert.strictEqual(move(2, 5), 12);
  });
});
