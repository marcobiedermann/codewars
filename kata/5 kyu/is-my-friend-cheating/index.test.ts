import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeNb from './index.ts';

describe('removeNb', () => {
  it('should return array of all numbers which are the possible removed numbers in the sequence', () => {
    assert.deepEqual(removeNb(26), [
      [15, 21],
      [21, 15],
    ]);
    assert.deepEqual(removeNb(100), []);
  });
});
