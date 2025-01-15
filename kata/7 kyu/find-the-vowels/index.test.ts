import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import vowelIndices from './index.ts';

describe('vowelIndices', () => {
  it('should return list of vowel indices', () => {
    assert.deepEqual(vowelIndices('mmm'), []);
    assert.deepEqual(vowelIndices('apple'), [1, 5]);
    assert.deepEqual(vowelIndices('super'), [2, 4]);
    assert.deepEqual(vowelIndices('orange'), [1, 3, 6]);
    assert.deepEqual(
      vowelIndices('supercalifragilisticexpialidocious'),
      [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33],
    );
  });
});
