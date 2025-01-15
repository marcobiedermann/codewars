import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pillars from './index.ts';

describe('pillars', () => {
  it('should calculate the distance between the first and the last pillar', () => {
    assert.strictEqual(pillars(1, 10, 10), 0);
    assert.strictEqual(pillars(2, 20, 25), 2000);
    assert.strictEqual(pillars(11, 15, 30), 15270);
  });
});
