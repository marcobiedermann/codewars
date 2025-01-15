import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twoHighest from './index.ts';

describe('twoHighest', () => {
  it('should return the two distinct highest values in a list', () => {
    assert.deepEqual(twoHighest([]), []);
    assert.deepEqual(twoHighest([15]), [15]);
    assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17]);
  });
});
