import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import anagrams from './index.ts';

describe('anagrams', () => {
  it('should find all anagrams of a word from a list', () => {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), [
      'carer',
      'racer',
    ]);
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
  });
});
