import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import seven from './index.ts';

describe('seven', () => {
  it('should return stack of last number and stack', () => {
    assert.deepEqual(seven(1021), [10, 2]);
    assert.deepEqual(seven(1603), [7, 2]);
    assert.deepEqual(seven(371), [35, 1]);
    assert.deepEqual(seven(483), [42, 1]);
  });
});
