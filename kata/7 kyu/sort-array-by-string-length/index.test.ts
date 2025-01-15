import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sortByLength from './index.ts';

describe('sortByLength', () => {
  it('should sort strings by length', () => {
    assert.deepEqual(sortByLength(['Beg', 'Life', 'I', 'To']), ['I', 'To', 'Beg', 'Life']);
    assert.deepEqual(sortByLength(['', 'Moderately', 'Brains', 'Pizza']), [
      '',
      'Pizza',
      'Brains',
      'Moderately',
    ]);
    assert.deepEqual(sortByLength(['Longer', 'Longest', 'Short']), ['Short', 'Longer', 'Longest']);
  });
});
