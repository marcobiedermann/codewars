import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import race from './index.ts';

describe('race', () => {
  it('should return time it takes `B` to catch `A`', () => {
    assert.deepEqual(race(720, 850, 70), [0, 32, 18]);
    assert.deepEqual(race(80, 91, 37), [3, 21, 49]);
    assert.deepEqual(race(80, 100, 40), [2, 0, 0]);
    assert.strictEqual(race(2, 1, 0), null);
  });
});
