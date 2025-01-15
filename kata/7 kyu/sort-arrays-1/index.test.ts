import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sortme from './index.ts';

describe('sortme', () => {
  it('should sort elements in lexicographical order', () => {
    assert.deepEqual(sortme(['one', 'two', 'three']), ['one', 'three', 'two']);
  });
});
