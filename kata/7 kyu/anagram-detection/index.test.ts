import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isAnagram from './index.ts';

describe('isAnagram', () => {
  it('should check is string is anagram', () => {
    assert.strictEqual(isAnagram('foefet', 'toffee'), true);
    assert.strictEqual(isAnagram('Buckethead', 'DeathCubeK'), true);
    assert.strictEqual(isAnagram('Twoo', 'WooT'), true);

    assert.strictEqual(isAnagram('dumble', 'bumble'), false);
    assert.strictEqual(isAnagram('ound', 'round'), false);
    assert.strictEqual(isAnagram('apple', 'pale'), false);
  });
});
