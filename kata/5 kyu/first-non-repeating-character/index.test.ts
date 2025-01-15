import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import firstNonRepeatingLetter from './index.ts';

describe('firstNonRepeatingLetter', () => {
  it('should return first non repeating letter in string', () => {
    assert.strictEqual(firstNonRepeatingLetter('a'), 'a');
    assert.strictEqual(firstNonRepeatingLetter('stress'), 't');
    assert.strictEqual(firstNonRepeatingLetter('moonmen'), 'e');
  });
});
