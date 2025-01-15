import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import number from './index.ts';

describe('number', () => {
  it('should prepend lines by line number', () => {
    assert.deepEqual(number([]), []);
    assert.deepEqual(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c']);
  });
});
