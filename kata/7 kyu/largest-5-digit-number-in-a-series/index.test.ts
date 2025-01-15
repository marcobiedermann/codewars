import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should return max number with 5 digits in string', () => {
    assert.strictEqual(solution('1234567890'), 67890);
  });
});
