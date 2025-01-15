import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should return the sum of all the multiples of 3 pr 5', () => {
    assert.strictEqual(solution(10), 23);
  });
});
