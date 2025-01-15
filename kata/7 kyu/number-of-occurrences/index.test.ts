import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import numberOfOccurrences from './index.ts';

describe('numberOfOccurrences', () => {
  it('should return number of occurrences', () => {
    assert.strictEqual(numberOfOccurrences([4, 0, 4], 4), 2);
  });
});
