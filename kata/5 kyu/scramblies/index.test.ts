import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import scramble from './index.ts';

describe('scramble', () => {
  it('should check if a portion of `str1` can be rearranged to match `str2`', () => {
    assert.strictEqual(scramble('rkqodlw', 'world'), true);
    assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
    assert.strictEqual(scramble('katas', 'steak'), false);
    assert.strictEqual(scramble('scriptjava', 'javascript'), true);
    assert.strictEqual(scramble('scriptingjava', 'javascript'), true);
    assert.strictEqual(scramble('scriptsjava', 'javascripts'), true);
    assert.strictEqual(scramble('jscripts', 'javascript'), false);
    assert.strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
    assert.strictEqual(scramble('scriptjavx', 'javascript'), false);
  });
});
