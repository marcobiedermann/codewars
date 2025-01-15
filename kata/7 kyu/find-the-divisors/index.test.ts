import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import divisors from './index.ts';

describe('divisors', () => {
  it('should return list of divisors or prime', () => {
    assert.deepEqual(divisors(15), [3, 5]);
    assert.deepEqual(divisors(12), [2, 3, 4, 6]);
    assert.strictEqual(divisors(13), '13 is prime');
  });
});
