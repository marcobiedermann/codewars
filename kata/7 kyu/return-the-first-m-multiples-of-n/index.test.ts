import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import multiples from './index.ts';

describe('multiples', () => {
  it('should return an array of the first `m` multiples of `n`', () => {
    assert.deepEqual(multiples(3, 5), [5, 10, 15]);
  });
});
