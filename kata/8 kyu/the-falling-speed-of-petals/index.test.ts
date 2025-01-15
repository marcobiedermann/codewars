import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sakuraFall from './index.ts';

describe('sakuraFall', () => {
  it('should return time it takes to reach the ground', () => {
    assert.strictEqual(sakuraFall(5), 80);
    assert.strictEqual(sakuraFall(10), 40);
    assert.strictEqual(sakuraFall(-1), 0);
  });
});
