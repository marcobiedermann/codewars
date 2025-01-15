import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import songDecoder from './index.ts';

describe('songDecoder', () => {
  it('should remove `WUB` and separate words with space', () => {
    assert.strictEqual(songDecoder('AWUBBWUBC'), 'A B C');
    assert.strictEqual(songDecoder('AWUBWUBWUBBWUBWUBWUBC'), 'A B C');
    assert.strictEqual(songDecoder('WUBAWUBBWUBCWUB'), 'A B C');
  });
});
